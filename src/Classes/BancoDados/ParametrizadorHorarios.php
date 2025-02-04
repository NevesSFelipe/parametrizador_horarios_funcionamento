<?php

require_once 'Conexao.php';

class ParametrizadorHorarios {

    private $conexao;
    private $tabela;

    public function __construct($tabela)
    {   
        $objConexao = new Conexao;
        $this->conexao = $objConexao->getConexao();

        $this->tabela = $tabela;
    }

    public function parametrizarHorario($arrayHorarios)
    {
        $teveFalhaNaExecucao = false;

        foreach($arrayHorarios as $diaSemana => $horarioParametrizado) {

            $jsonHorarioParametrizado = json_encode($horarioParametrizado);

            $sql = "UPDATE $this->tabela SET horarios_parametrizados = ? WHERE dia_semana = ?";

            $stmt = $this->conexao->prepare($sql);

            if($stmt) {

                $stmt->bind_param("ss", $jsonHorarioParametrizado, $diaSemana);

                if (!$stmt->execute()) {
                    $teveFalhaNaExecucao = true;
                }

                $stmt->close();

            } else {
                $teveFalhaNaExecucao = true;
            }
    
        }

        if ($teveFalhaNaExecucao) {
            echo json_encode(["status" => "error", "message" => "Erro ao parametrizar horários"]);
        } else {
            echo json_encode(["status" => "success", "message" => "Horários de Atendimento parametrizados com sucesso."]);
        }
    }

}