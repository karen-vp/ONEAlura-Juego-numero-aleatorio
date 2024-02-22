let numeroSecreto = 0;
let intentos = 1;

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
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
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
