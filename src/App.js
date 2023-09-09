import './App.css';
import BotonJuego from "./componentes/botonPPT.js"
import logo from "./imagenes/LogoJuegoTP3.jpg"

function App() {
  return (
    <div className="App">
      <h1>Piedra Papel o Tijera</h1>
      <img  src={logo} alt="logo del juego" className="logo-juegoTP3"/>
      <BotonJuego />
      

    </div>
  );
}

export default App;