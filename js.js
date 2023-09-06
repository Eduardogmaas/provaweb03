var numeros = [];

function adicionarNumero() {
    var inputNumero = document.getElementById("inNumero");
    var numero = parseInt(inputNumero.value);

    if (!isNaN(numero)) {
        numeros.push(numero);
        numeros.sort(function(a, b) {
            return a - b;
        });
 
const frm = document.createElement("label");
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

const 

frm.addEvenListener("submit", (e) =>{
    e.preventDefault();

    const tarefa = frm.inNumero.value;
    const h5 = document.createElement("h5");
});
