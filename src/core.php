<?php

    require_once 'Classes/Parametrizador.php';

    $dados = recuperDadosRequest();
    $parametrizador = new Parametrizador;

    if( $dados['acaoAjax'] === "carregar" ) { return $parametrizador->carregarParametrizador(); }

    if( $dados['acaoAjax'] === "salvar" ) { return $parametrizador->parametrizarHorario($dados['horarios']); }
    
    function recuperDadosRequest() {

        if( $_SERVER['REQUEST_METHOD'] == 'PUT' || $_SERVER['REQUEST_METHOD'] == 'POST' ) {

            $json = file_get_contents('php://input');
            $dados = json_decode($json, true);
        
            if (json_last_error() !== JSON_ERROR_NONE) {
             
                http_response_code(400);
                echo json_encode(["error" => "Erro ao processar os dados JSON."]);
                exit;
            
            }

            return $dados;
    
        }

        return $_REQUEST;
    }