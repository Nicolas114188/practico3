import React from "react";

/*Son las reglas de juego*/
function ReglasDeJuego(){

    return(
    <div className="contenedor">
        <h2>Cómo se juega 🚀</h2>
        <p>
        Los jugadores elije una de las tres tipo de imagen piedra papel o tijera que es 
        representada señales de mano si eligimos:
        </p>
        <img className="imagen-ref" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Piedra_papel_tijeras.jpg" alt="Referencia del juego"/>
    </div>
    );
}
export default ReglasDeJuego;