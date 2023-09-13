import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import piedra from "../imagenes/piedra.jpg"
import papel from "../imagenes/papel.jpg"
import tijera from "../imagenes/tijera.jpg"
import resetear from "../imagenes/Resetiar.jpg"

// variables: 
let cantGanadaComputadora=0;
let cantGanadaUsuario=0;
let jugadaComputadora;
let jugadaUsuario;
let ganadorPrevio;
const opcinesJuego=["piedra","papel","tijera"];
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

//funcion jugabilidad
function jugarPiedraPapelTijera(jugadaUsuario){
    //Variables locales de la Fución
    console.log("usuario elegio:"+jugadaUsuario);
    jugadaComputadora= obtenerJugadaComputadora(); 
    console.log("la computadora elegio:"+ jugadaComputadora);      
    //determinación del ganador
    ganadorPrevio=determinarGanador(jugadaComputadora,jugadaUsuario);
    if(ganadorPrevio===posibleJugada[1]){
       cantGanadaComputadora+=1;
    }else if(ganadorPrevio===posibleJugada[2]){
       cantGanadaUsuario+=1;
    }
    console.log("La computadora: "+cantGanadaComputadora+" y el usuario: "+cantGanadaUsuario);
    
}

// Función de React
function JuegoPPT(){
    //Variables locales de la Fución
    const [impJuCompu, setImpJuCompu]=useState("no definido");
    const [impJuUsuario, setImpJuUsuario]=useState("no definido");
    const [impGanador, setimpGanador] = useState("no definido")
    const opcionJugar=(a)=>{
        jugadaUsuario=a;
        jugarPiedraPapelTijera(jugadaUsuario);
        if(jugadaComputadora==opcinesJuego[0]){
            setImpJuCompu("piedra");
        }else if(jugadaComputadora==opcinesJuego[1]){
            setImpJuCompu("papel");
        }else if(jugadaComputadora==opcinesJuego[2]){
            setImpJuCompu("tijera");
        }
        if(jugadaUsuario==opcinesJuego[0]){
            setImpJuUsuario("piedra");
        }else if(jugadaUsuario==opcinesJuego[1]){
            setImpJuUsuario("papel");
        }else if(jugadaUsuario==opcinesJuego[2]){
            setImpJuUsuario("tijera");
        }
        setimpGanador("La computadora: "+cantGanadaComputadora+" y el usuario: "+cantGanadaUsuario);
    };
  
    return(
        <form>
            <p>Nombre del jugador: </p>
            <input id="nombre" type="text" />
            <div className="grupo-btn">
                <button id="piedra" onClick={()=> opcionJugar("piedra")} type="button" >
                    <img src={piedra} alt="una piedra"/>                 
                </button>
                <button id="papel" onClick={()=> opcionJugar("papel")} type="button">
                    <img src={papel} alt="un papel"/>
                </button>
                <button id="tijera" onClick={()=> opcionJugar("tijera")} type="button">
                    <img src={tijera} alt="una tijera"/>
                </button>
                <button id="resetiar" type="reset">
                    <img src={resetear} alt="resetear"/>
                </button>
            </div>
            <p>La computadora elegio: {impJuCompu}</p>
            <p>El Usuario elegio: {impJuUsuario} </p>
            <p>El ganador es: {impGanador}</p>
        </form>
        
    );
}
//hacer otra funcion  imprimir mensaje para exportarla App
export default JuegoPPT;