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

    const totalLinhas = calcularQtdLinhasAdicionadas();

    const elementosCardDataEspecifica = criarHTMLDataEspecifica(totalLinhas);

    document.getElementById("cardDataEspecifica").append(elementosCardDataEspecifica);
    
}

function criarHTMLDataEspecifica(totalLinhas) {

    const divRow = criarDIV("row p-3", `linhaDataEspecifica_${totalLinhas}`, 'linhaDataEspecifica');
    const divData = criarDIVData(totalLinhas);
    const divHorarioInicial = criarDIVHorario("horaInicioDataEspecifica", "Hora Inicial:", `horaInicioDataEspecifica_${totalLinhas}`);
    const divHorarioFim = criarDIVHorario("horaFimDataEspecifica", "Hora Final:", `horaFimDataEspecifica_${totalLinhas}`);
    const divIntevalo = criarDIVIntervalo(`intervaloDataEspecifica_${totalLinhas}`);
    const divRemover = criarDIVRemover(totalLinhas);

    divRow.append(divData);
    divRow.append(divHorarioInicial);
    divRow.append(divHorarioFim);
    divRow.append(divIntevalo);
    divRow.append(divRemover);

    return divRow;

}

function criarDIVData(idLinha) {

    const divData = criarDIV("form-group col-md-3");
    const labelData = criarLabel("dataEspecifica", "Data:");
    const inputData = criarInputDate("form-control", `dataEspecifica_${idLinha}`, 'dataEspecifica');

    divData.append(labelData);
    divData.append(inputData);

    return divData;
}

function criarDIVHorario(idHorario, descricaoHorario, idLinha) {

    const divHorario = criarDIV("form-group col-md-3", idHorario);
    const labelHorario = criarLabel(idHorario, descricaoHorario);
    const inputHorario = criarInputTime("form-control", idLinha, idHorario);

    divHorario.append(labelHorario);
    divHorario.append(inputHorario);

    return divHorario;
}

function criarDIVIntervalo(idLinha) {

    const divIntevalo = criarDIV("form-group col-md-2");
    const labelIntevalo = criarLabel(idLinha, "Intervalo (minutos):");
    const inputIntevalo = criarInputNumber("form-control", idLinha, "intervaloDataEspecifica", 5);

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

    const objLinhas = document.getElementsByName("dataEspecifica");

    
    let nroUltimoId = 0;

    if (objLinhas.length > 0) {

        const ultimoElemento = objLinhas[objLinhas.length - 1];
        const utlimoId = (ultimoElemento.id).split("_");
        nroUltimoId =  parseInt(utlimoId[1]);
        nroUltimoId += 1;
        
    }

    return nroUltimoId;

}

function removerDataEspecifica(idLinha) {

    document.getElementById(`linhaDataEspecifica_${idLinha}`).remove();

}