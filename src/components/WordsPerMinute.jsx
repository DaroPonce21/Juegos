import { useEffect, useState } from "react";
import "../styles/WordsPerMinutes.css";
import { Link } from "react-router-dom";

const Words = [
  "palabra",
  "argentina",
  "felino",
  "comillas",
  "respuesta",
  "computadora",
  "bicicleta",
  "interesante",
  "desarrollo",
  "conocimiento",
  "experiencia",
  "excelente",
  "significado",
  "importante",
  "crecimiento",
  "entendimiento",
  "interesantes",
  "maravilloso",
  "comprender",
  "extraordinario",
];

const INITIAL_STATE = {
  word: Words[Math.floor(Math.random() * Words.length)],
  characterCount: 0,
  buffer: "",
  time: 0,
};

const WORDS_PER_MINUTE = 60;

const WordsPerMinute = () => {
  const [state, setState] = useState(() => INITIAL_STATE);

  const { word, characterCount, buffer, time } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buffer === word) {
      setState((prev) => ({
        ...prev,
        word: Words[Math.floor(Math.random() * Words.length)],
        characterCount: prev.characterCount + word.length,
      }));
    }

    setState((prev) => ({ ...prev, buffer: "" }));
  };

  useEffect(() => {
    if (time !== 0) {
      const timeout = setTimeout(
        () => setState((prev) => ({ ...prev, time: prev.time - 1 })),
        1000
      );
      return () => clearTimeout(timeout);
    }
  }, [time]);

  const handlePlay = (e) => {
    e.preventDefault();
    setState(() => ({ ...INITIAL_STATE, time: WORDS_PER_MINUTE }));
  };

  return (
    
    <div className="container">
      <div>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
      {time !== 0 && <h1 className="word-display">{word}</h1>}
      <h2>Caracteres tipeados: {characterCount}</h2>
      <h3>Tiempo Restante: {time}</h3>
      {time !== 0 ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            value={buffer}
            onChange={({ target }) =>
              setState((prev) => ({ ...prev, buffer: target.value }))
            }
          />
          <button type="submit">Siguiente</button>
        </form>
      ) : (
        <button onClick={handlePlay}>Jugar</button>
      )}
    </div>
  );
};

export default WordsPerMinute;
