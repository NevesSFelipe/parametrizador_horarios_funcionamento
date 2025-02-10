import { criarDIV, criarLabel, criarInputDate, criarInputTime, criarInputNumber, criarP } from './helpers/html.js';

document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
    listener();
}

function listener() {
    document.getElementById("btnAdicionarCamposDataEspecifica").onclick = adicionarCamposDataEspecifica;
}

export function adicionarCamposDataEspecifica() {

    const elementosCardDataEspecifica = criarHTMLDataEspecifica();

    document.getElementById("cardDataEspecifica").append(elementosCardDataEspecifica);
    
}

function criarHTMLDataEspecifica() {

    const totalLinhas = calcularQtdLinhasAdicionadas();

    const divRow = criarDIV("row p-3", `linhaDataEspecifica_${totalLinhas}`);
    const divData = criarDIVData();
    const divHorarioInicial = criarDIVHorario("horaInicioDataEspecifica", "Hora Inicial:");
    const divHorarioFim = criarDIVHorario("horaFimDataEspecifica", "Hora Final:");
    const divIntevalo = criarDIVIntervalo();
    const divRemover = criarDIVRemover(totalLinhas);

    divRow.append(divData);
    divRow.append(divHorarioInicial);
    divRow.append(divHorarioFim);
    divRow.append(divIntevalo);
    divRow.append(divRemover);

    return divRow;
}

function criarDIVData() {

    const divData = criarDIV("form-group col-md-3 linhaDataEspecifica");
    const labelData = criarLabel("dataEspecifica", "Data:");
    const inputData = criarInputDate("form-control", "dataEspecifica");

    divData.append(labelData);
    divData.append(inputData);

    return divData;
}

function criarDIVHorario(idHorario, descricaoHorario) {

    const divHorario = criarDIV("form-group col-md-3", idHorario);
    const labelHorario = criarLabel(idHorario, descricaoHorario);
    const inputHorario = criarInputTime("form-control", idHorario);

    divHorario.append(labelHorario);
    divHorario.append(inputHorario);

    return divHorario;
}

function criarDIVIntervalo() {

    const divIntevalo = criarDIV("form-group col-md-2");
    const labelIntevalo = criarLabel("intervaloDataEspecifica", "Intervalo (minutos):");
    const inputIntevalo = criarInputNumber("form-control", "intervaloDataEspecifica", 5);

    divIntevalo.append(labelIntevalo);
    divIntevalo.append(inputIntevalo);

    return divIntevalo;
}

function criarDIVRemover(totalLinhas) {

    const divP = criarDIV("form-group col-md-1 d-flex mt-3");
    const p = criarP("text-danger mt-1", "", "");
    p.innerHTML = `<i title='Remover linha ${totalLinhas}' class='fa-solid fa-trash mt-4' style='cursor: pointer;'></i>`;
    p.addEventListener('click', () => removerDataEspecifica(totalLinhas))

    divP.append(p);

    return divP;
}

function calcularQtdLinhasAdicionadas() {

    const objLinhas = document.getElementsByClassName("linhaDataEspecifica");

    return objLinhas.length;

}

function removerDataEspecifica(idLinha) {

    document.getElementById(`linhaDataEspecifica_${idLinha}`).remove();

}