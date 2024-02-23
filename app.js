let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos); 
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        // el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
                asignarTextoElemento('p','El numero secreto es mayor');

            }
            intentos++;
            limpiarCaja();
        }
    
    return;
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value = '';
    
}



function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //  Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        // si el numero generado esta incluido en la lista hacemos una operacion
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    // limpiar el input
        limpiarCaja();
    // Indicar mensaje de intervalo de numeros
        condicionesIniciales();
    // Inicializar el numero de intentos
        intentos = 1;
     // Deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
