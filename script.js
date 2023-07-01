// console.log("Hello, world!");
var titulo=document.querySelector("h1");
const input1=document.getElementById("calculo1");
const input2=document.getElementById("calculo2");
const btn=document.getElementById("btnCalcular");

let resultado=0;
let textoResultado=document.getElementById("resultado");


let valor1=0;
let valor2=0;

input1.addEventListener("change", recibirValor);
input2.addEventListener("change", recibirValor);
btn.addEventListener("click", btnOnClick);

function recibirValor(input){
    if(input.target.id=="calculo1"){
        valor1=parseInt(input1.value);
    }
    if(input.target.id=="calculo2"){
        valor2=parseInt(input2.value);
    }
}

function btnOnClick(){
    resultado=valor1+valor2;
    textoResultado.innerText="El resultado de la suma es: "+resultado;
}