import React from "react";
import piedra from "./imagenes/piedra.jpg"
import papel from "./imagenes/papel.jpg"
import tijera from "./imagenes/tijera.jpg"
import resetear from "./imagenes/Resetiar.jpg"

// variables: 
let cantGanadaComputadora=0;
let cantGanadaUsuario=0;
const opcinesJuego=["piedra","papel","tijeras"];
const posibleJugada=["Empate","Gana la computadora","Gana el usuario"];
//const nombreJugador=document.getElementById("nombre");

/*let eleccionPiedra=document.getElementById("piedra");
let eleccionPapel=document.getElementById("papel");
let eleccionTijera=document.getElementById("tijera");*/


// Fución Ganador
function DeterminarGanador(jugadaComputadora,jugadaUsuario){
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

/*eleccionPiedra.addEventListener("click",()=>{
    jugarPiedraPapelTijera(opcinesJuego[0]);
})
eleccionPapel.addEventListener("click",()=>{
   jugarPiedraPapelTijera(opcinesJuego[1]);
})
eleccionTijera.addEventListener("click",()=>{
   jugarPiedraPapelTijera(opcinesJuego[2]);
})*/

// Función jugar Piedra Papel o Tijera()
function JugarPiedraPapelTijera(){
    //Variables locales de la Fución
    let ganadorPrevio;
    let jugadaComputadora= obtenerJugadaComputadora();  
    //variable de quien gano
   ganadorPrevio=determinarGanador(jugadaComputadora,jugadaUsuario);
   if(ganadorPrevio===posibleJugada[1]){
       cantGanadaComputadora+=1;
   }else if(ganadorPrevio===posibleJugada[2]){
       cantGanadaUsuario+=1;
   }
    return(
        <div className="boton">
            <button className="piedra" type="button">
                <img src={piedra} alt="una piedra"/>
            </button>
            <button className="papel" type="button">
                <img src={papel} alt="una papel"/>
            </button>
            <button className="tijera" type="button">
                <img src={tijera} alt="una tijera"/>
            </button>
            <button className="resetiar" type="reset" >
                <img src={resetear} />
            </button>
        </div>
    );
}
export default JugarPiedraPapelTijera;