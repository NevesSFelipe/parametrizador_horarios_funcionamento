<?php

class BancoDados {

    private $conexao;

    public function __construct($tabela)
    {        
        $this->conexao = mysqli_connect("localhost", 'root', '', 'thaistar');

        if ($this->conexao->connect_errno) {
            echo "Falha na conexao: " . $this->conexao->connect_error;
            exit();
        }
    }

}