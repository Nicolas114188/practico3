import React from "react";
import piedra from "../imagenes/piedra.jpg"
import papel from "../imagenes/papel.jpg"
import tijera from "../imagenes/tijera.jpg"
import resetear from "../imagenes/Resetiar.jpg"

// variables: 
let cantGanadaComputadora=0;
let cantGanadaUsuario=0;
const opcinesJuego=["piedra","papel","tijeras"];
const posibleJugada=["Empate","Gana la computadora","Gana el usuario"];
//const nombreJugador=document.getElementById("nombre");

 //Funcion de la Computadora
function obtenerJugadaComputadora(){
    let jugadaObtenida;
    jugadaObtenida=Math.floor(Math.random()*3);
    return opcinesJuego[jugadaObtenida];
}
// Fución Ganador
function determinarGanador(jugadaComputadora,jugadaUsuario){
    let resultado;
    if((jugadaComputadora===opcinesJuego[0]&&jugadaUsuario===opcinesJuego[2])||
             (jugadaComputadora===opcinesJuego[1]&&jugadaUsuario===opcinesJuego[0])||
             (jugadaComputadora===opcinesJuego[2]&&jugadaUsuario===opcinesJuego[1])){
        resultado=posibleJugada[1];
    }else if((jugadaComputadora===opcinesJuego[1]&&jugadaUsuario===opcinesJuego[2])||
             (jugadaComputadora===opcinesJuego[0]&&jugadaUsuario===opcinesJuego[1])||
             (jugadaComputadora===opcinesJuego[2]&&jugadaUsuario===opcinesJuego[0])){
        resultado=posibleJugada[2];
    }else {
        resultado=posibleJugada[0];
    }
    return resultado;
}

function jugarPiedraPapelTijera(jugadaUsuario){
    
    /*Validación de Campo Nombre del usuario
    if(nombreJugador.value==""){
        alert("Error Debe ingresar un nombre al usuario");
        return;
    }*/
    //Variables locales de la Fución
    let ganadorPrevio;
    let jugadaComputadora= obtenerJugadaComputadora();       
    /*imprimir la jugada
    document.getElementById("jugadaPC").innerHTML="La computadora eligio: "+jugadaComputadora;
    document.getElementById("jugadaUsuario").innerHTML="El usuario eligio: "+jugadaUsuario;*/
   //variable de quien gano
   ganadorPrevio=determinarGanador(jugadaComputadora,jugadaUsuario);
   if(ganadorPrevio===posibleJugada[1]){
       cantGanadaComputadora+=1;
   }else if(ganadorPrevio===posibleJugada[2]){
       cantGanadaUsuario+=1;
   }
   /*document.getElementById("jugada").innerHTML="La computadora: "+cantGanadaComputadora+" y el usuario: "+cantGanadaUsuario;
   if(cantGanadaComputadora===3){
   
        document.getElementById("resultado").innerHTML="Perdiste el juego "+ nombreJugador.value +" para la proxima";
        eleccionPiedra.classList.remove('disabled');
        eleccionPapel.classList.remove('disabled');
        eleccionTijera.classList.remove('disabled');
    } 
    if(cantGanadaUsuario===3){
        
        document.getElementById("resultado").innerHTML="Ganaste "+ nombreJugador.value +" Felicitaciones...!!!";
        eleccionPiedra.classList.remove('disabled');
        eleccionPapel.classList.remove('disabled');
        eleccionTijera.classList.remove('disabled');
    }*/
}



// Función de React
function JuegoPPT(){
    //Variables locales de la Fución
    const opcionJugar=(a)=>{
        jugarPiedraPapelTijera(a);
    }
    
    return(
        <form>
            <p>Nombre del jugador: </p>
            <input id="nombre" type="text" />
            <div className="grupo-btn">
                <button id="piedra" onClick={()=> opcionJugar("piedra")} type="button" >
                    <img src={piedra} alt="una piedra"/>                 
                </button>

                <button id="papel" onClick={()=> opcionJugar("papel")} type="button">
                    <img src={papel} alt="una papel"/>
                </button>
                <button id="tijera" onClick={()=> opcionJugar("tijera")} type="button">
                    <img src={tijera} alt="una tijera"/>
                </button>
                <button id="resetiar" type="reset">
                    <img src={resetear} alt="resetear"/>
                </button>
            </div>
            <p></p>
            <p id="jugadaUsuario" />
            <p id="jugada" />
            <p id="resultado" />
        </form>
        
    );
}
export default JuegoPPT;