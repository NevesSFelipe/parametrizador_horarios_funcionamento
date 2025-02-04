<?php
    
    require_once 'BancoDados/ParametrizadorHorarios.php';

    class Parametrizador {

        private $parametrizadorHorarios;

        public function __construct()
        {
            $this->parametrizadorHorarios = new ParametrizadorHorarios("parametrizador_horarios");
        }

        public function parametrizarHorario($arrayHorarios)
        {
            $this->parametrizadorHorarios->parametrizarHorario($arrayHorarios);
        }

    }