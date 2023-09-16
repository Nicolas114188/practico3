import "./App.css";
import logo from "./imagenes/LogoJuegoTP3.jpg";
import JuegoPPT from "./componentes/JuegoPPT.js";

function App() {
  return (
    <div className="App">
      <h1>Piedra Papel o Tijera</h1>
      <img  src={logo} alt="logo del juego" className="logo-juegoTP3"/>
      < JuegoPPT/>
      

    </div>
  );
}

export default App;