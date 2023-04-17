//addToOutput()
//calculate()
//clearOutput()

const output = document.querySelector('#output');

function agregarAlOutput(value){
    output.value += value;
}

function reiniciar(){
    output.value = '';
}

function calcular() {
    const resultado = eval(output.value);
    output.value = resultado;
}
