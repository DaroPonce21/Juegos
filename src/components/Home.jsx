import { Link } from "react-router-dom";
import memo from "../image/memo.png";
import poke from "../image/pokemon.png";
import palabras from "../image/palabras.png";
import "../styles/Home.css";
const arrayJuegos = [
    { name: "Memotest", path: "/memotest", img: memo },
    { name: "Palabras por Minuto", path: "/wpm", img: palabras },
    { name: "Pokemon", path: "/pokemon", img: poke },
  ];
  
  const Home = () => {
    return (
      <div className="home-container">
        <h1>Bienvenidos a Juegos de Práctica</h1>
        <h3>Lista de Juegos</h3>
        <div className="card-content-home">
          {arrayJuegos.map((elem, index) => (
            <Link to={elem.path} key={index} className="card-link-home">
              <div className="card-home">
                <img className="card-image-home" src={elem.img} alt={elem.name} />
                <div className="card-content-home">
                  <label className="card-label-home">{elem.name}</label>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;