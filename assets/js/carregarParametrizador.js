import { adicionarCamposDataEspecifica } from './dataEspecifica.js';

document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
    carregarParametrizador();
}


function carregarParametrizador() {
    enviarAjax();
}

async function enviarAjax() {

    const url = "src/core.php?acaoAjax=carregar"; 

    try {
    
        const response = await fetch(url);
        const retornoBD = await response.json();
    
        retornoBD.forEach((valor, chave) => {

            const dia_semana = valor.dia_semana;
            const idDiaSemana = dia_semana.charAt(0).toUpperCase() + dia_semana.slice(1);

            if( dia_semana === 'segundaSexta' ) { preencherValoresHorarios(idDiaSemana, valor.horarios_parametrizados) }
            if( dia_semana === 'sabado' ) { preencherValoresHorarios(idDiaSemana, valor.horarios_parametrizados) }
            if( dia_semana === 'domingo' ) { preencherValoresHorarios(idDiaSemana, valor.horarios_parametrizados) }
            
            if( dia_semana === 'dataEspecifica' ) { 
                
                const arrayHorariosEspecificos = valor.horarios_parametrizados;
                
                arrayHorariosEspecificos.forEach((valor, chave) => {

                    adicionarCamposDataEspecifica();

                    document.getElementById(`dataEspecifica_${chave}`).value = valor.data;
                    document.getElementById(`horaInicioDataEspecifica_${chave}`).value = valor.horaInicio;
                    document.getElementById(`horaFimDataEspecifica_${chave}`).value = valor.horaFim;
                    document.getElementById(`intervaloDataEspecifica_${chave}`).value = valor.intervalo;

                })

            }
        
        })
    
    } catch (error) {
    
        console.error('Erro:', error);
    
    }

}

function preencherValoresHorarios(diaSemana, horarioSemana) {

    document.getElementById(`horaInicio${diaSemana}`).value = horarioSemana.horaInicio;
    document.getElementById(`horaFim${diaSemana}`).value = horarioSemana.horaFim;
    document.getElementById(`intervalo${diaSemana}`).value = horarioSemana.intervalo;

}