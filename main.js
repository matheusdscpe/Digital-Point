import { conometro } from "./conometro.js";


//captura dos elementos
const display = document.querySelector('#watch');
const bnt_iniciar = document.querySelector('#start');
const bnt_pausar = document.querySelector('#pause');
const bnt_parar = document.querySelector('#stopp');

//variaveis de ref
let horas = '00';
let minutos = '00';
let segundos = '00';


function iniciar(){
    setInterval(visor,1000);
};

function pausar(){
    
};

function parar(){
    
};


function visor(){
    conometro();
    
    // sec++
    // display.innerHTML = sec;
};












//atribuição do evento de click
bnt_iniciar.addEventListener('click', iniciar);
bnt_pausar.addEventListener('click', pausar);
bnt_parar.addEventListener('click', parar);