import "./App.css";
import logo from "./imagenes/LogoJuegoTP3.jpg";
import JuegoPPT from "./componentes/JuegoPPT";
import ReglasDeJuego from "./componentes/ReglasDeJuego"

function App() {
  return (
    <div className="App">
      <h1>Piedra Papel o Tijera ☢</h1>
      <img  src={logo} alt="logo del juego" className="logo-juegoTP3"/>
      <div className="Contenedor" >
        <div className="item item-1">
            <ReglasDeJuego/>
        </div>
        <div className="item item-2"> 
            <JuegoPPT/>
        </div> 
      </div>
    </div>
  );
}

export default App;