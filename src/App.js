import { useEffect, useState } from "react";
import "./App.css";
import Frases from "./components/Frases";
import Spinner from './components/Spinner.js'
import logoSimpson from "./img/logosimpson.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bandera, setBandera] = useState(false)
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    setBandera(true)
    let api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    let respuesta = await api.json();
    setFrase(respuesta[0]);
    setTimeout(() => {
      setBandera(false)
    }, 1000)
  };

  useEffect(() => {
    consultarAPI()
  }, [])

  const componente = bandera === true ? (<Spinner></Spinner>) : (<Frases frase={frase}></Frases>)

  return (
    <div className="container">
      <section className='text-center my-3'>
        <div>
          <img src={logoSimpson} alt="Logo Simpson" />
        </div>
        <div>
          <button className="btn btn-warning w-25" type="button" onClick={() => consultarAPI()}>Get quote</button>
        </div>
      </section>
      {componente}     
    </div>
  );
}

export default App;
