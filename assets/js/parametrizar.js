document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
    listener();
}

function listener() {
    document.getElementById("btnParametrizador").onclick = parametrizarHorarios;
}

function parametrizarHorarios() {

    try {
        
        const form = document.getElementById("formParametrizador");

        let data = {};
        data['horarios'] = {};
        data["horarios"] = montarDataParametrizador("SegundaSexta", data['horarios']);
        data["horarios"] = montarDataParametrizador("Sabado", data['horarios']);
        data["horarios"] = montarDataParametrizador("Domingo", data['horarios']);
        data["horarios"]["dataEspecifica"] = montarDataParametrizadorEspecifico(form);
        data["acaoAjax"] = "salvar";
    
    } catch (error) {
     
        alert(error.message);
    
    }

}

function montarDataParametrizador(diaSemana, data) {

    const horaInicio = document.getElementById(`horaInicio${diaSemana}`).value;
    const horaFim = document.getElementById(`horaFim${diaSemana}`).value;
    const intervalo = document.getElementById(`intervalo${diaSemana}`).value;

    if ( validarHorarios(horaInicio, horaFim, intervalo) === false ) {
        throw new Error(`Horários de ${diaSemana} preenchidos incorretamente.`);
    }

    data[diaSemana] = { horaInicio, horaFim, intervalo };

    return data;

}

function montarDataParametrizadorEspecifico(form) {

    const objetoDataEspecifica = form.querySelectorAll("[name='dataEspecifica']");
    const objetoHoraInicioDataEspecifica = form.querySelectorAll("[name='horaInicioDataEspecifica']");
    const objetoHoraFimDataEspecifica = form.querySelectorAll("[name='horaFimDataEspecifica']");
    const objetoIntervaloDataEspecifica = form.querySelectorAll("[name='intervaloDataEspecifica']");

    const datasFormatadas = [];

    objetoDataEspecifica.forEach((element, index) => {

        const data = element.value;
        const horaInicio = objetoHoraInicioDataEspecifica[index] ?.value || "";
        const horaFim = objetoHoraFimDataEspecifica[index]?.value || "";
        const intervalo = objetoIntervaloDataEspecifica[index]?.value || "";

        if( data == "" || validarHorarios(horaInicio, horaFim, intervalo) == false ) {
            throw new Error("Por favor, preencha todos os campos corretamente.");
        }

        const dataFormatada = {

            data: element.value,
            horaInicio: objetoHoraInicioDataEspecifica[index]?.value || "",
            horaFim: objetoHoraFimDataEspecifica[index]?.value || "",
            intervalo: objetoIntervaloDataEspecifica[index]?.value || ""

        };

        datasFormatadas.push(dataFormatada);

    });

    return datasFormatadas;
}

function validarHorarios(horaInicio, horaFim, intervalo) {

    if( horaInicio == "" || horaFim == "" || intervalo == "" ) return false;

    if( converterHorario(horaInicio) > converterHorario(horaFim) ) return false;

    return true;
}

function converterHorario(horario) {

    const [horas, minutos] = horario.split(":").map(Number);
        
    return horas * 60 + minutos;

}