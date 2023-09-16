import React, { useRef, useState } from "react";
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
    const form=useRef();
    const [impJuCompu, setImpJuCompu]=useState("no definido");
    const [impJuUsuario, setImpJuUsuario]=useState("no definido");
    const [impGanador, setimpGanador] = useState("no definido");
    const [nombre, setnombre] = useState("");
    const opcionJugar=(a)=>{
        jugadaUsuario=a;
        jugarPiedraPapelTijera(jugadaUsuario);
        //setea el la jugada de la compu dependiendo si es piedra o papel o tijera
        if(jugadaComputadora===opcinesJuego[0]){
            setImpJuCompu("piedra");
        }else if(jugadaComputadora===opcinesJuego[1]){
            setImpJuCompu("papel");
        }else if(jugadaComputadora===opcinesJuego[2]){
            setImpJuCompu("tijera");
        }
        //setea el la jugada del usuario dependiendo si es piedra o papel o tijera
        if(jugadaUsuario===opcinesJuego[0]){
            setImpJuUsuario("piedra");
        }else if(jugadaUsuario===opcinesJuego[1]){
            setImpJuUsuario("papel");
        }else if(jugadaUsuario===opcinesJuego[2]){
            setImpJuUsuario("tijera");
        }
        setimpGanador("La computadora: "+cantGanadaComputadora+" y "+nombre+": "+cantGanadaUsuario);
        if(cantGanadaComputadora===3){
            setimpGanador("Perdiste sera para la proxima");
            reinicio();
        }
        if(cantGanadaUsuario===3){
            setimpGanador("Ganaste felicitaciones "+nombre);
            reinicio();
        }
    }
    const reinicio=()=>{
       /* form.reset();*/
        console.log("ESTOY EN EL REINICIO")
         setnombre("");
        cantGanadaComputadora=0;
        cantGanadaUsuario=0;
        setImpJuCompu("no definido");
        setImpJuUsuario("no definido");
        setimpGanador("no definido");
    }
    const nombreUsuario=({target})=>{
        setnombre(target.value);
    }
    
    //console.log("Yo soy "+nombre);
    return(
        <form ref={form}> 
            <p>Nombre del jugador: </p>
            <input id="nombre" type="text" value={nombre} onChange={nombreUsuario}/>
            
            <div className="grupo-btn">           
                <button id="piedra" onClick={()=> opcionJugar("piedra")}  type="button" >
                    <img src={piedra} alt="una piedra"/>                 
                </button>
                <button id="papel" onClick={()=> opcionJugar("papel")}  type="button">
                    <img src={papel} alt="un papel"/>
                </button>
                <button id="tijera" onClick={()=> opcionJugar("tijera")}  type="button">
                    <img src={tijera} alt="una tijera"/>
                </button>
                <button id="resetiar" onClick={reinicio} type="button">
                    <img src={resetear} alt="resetear"/>
                </button>
            </div>
            <p>La computadora elegio: {impJuCompu}</p>
            <p>El Usuario elegio: {impJuUsuario} </p>
            <p>El Resultado es: {impGanador}</p>
            {(nombre==="")&&(alert("Debe ingresar un Nombre"))}
        </form> 
    );
}

export default JuegoPPT;