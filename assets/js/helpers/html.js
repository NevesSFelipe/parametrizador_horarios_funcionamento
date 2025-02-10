export function criarDIV(className = "", id = "", valorName = "") {

    let div = document.createElement("div");
    div.className = className;
    div.id = id;

    if (valorName) {
        div.setAttribute(`data-${valorName}`, "");
    }
    
    return div;
}

export function criarLabel(forName = "", conteudoLabel = "") {

    let label = document.createElement("label");
    label.textContent = conteudoLabel;
    label.htmlFor = forName;

    return label;
}

export function criarInputDate(className = "", id = "", valorName = "") {

    let inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.className = className;
    inputDate.id = id;
    inputDate.name = valorName;

    return inputDate;
}

export function criarInputTime(className = "", id = "", valorName = "") {

    let inputTime = document.createElement("input");
    inputTime.type = "time";
    inputTime.className = className;
    inputTime.id = id;
    inputTime.name = valorName;

    return inputTime;
}

export function criarInputNumber(className = "", id = "", valorName = "", valorMinimo = 0) {

    let inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.className = className;
    inputNumber.id = id;
    inputNumber.name = valorName;
    inputNumber.min = valorMinimo;

    return inputNumber;
}

export function criarP(className = "", id = "", textoP = "") {

    let p = document.createElement("p");
    p.className = className;
    p.id = id;
    p.textContent = textoP;

    return p;
}