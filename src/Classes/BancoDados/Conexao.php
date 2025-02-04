<?php

class Conexao {

    private $conexao;

    public function __construct()
    {        
        try{

            $this->conexao = mysqli_connect("localhost", 'root', '', 'thaistar');
        
        } catch(Exception $e) {
        
            die("Conexão falhou: " . $e->getMessage());
        
        }
    }

    public function getConexao()
    {
        return $this->conexao;
    }

}