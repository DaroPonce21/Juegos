import { useState } from "react";
import "../styles/Pokemon.css";
import { Link } from "react-router-dom";

const Pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

const getRandomPokemonIndex = () => Math.floor(Math.random() * Pokemons.length);
const MATCH = getRandomPokemonIndex();
const Pokemon = () => {
  const [hasWon, toggleWon] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const respuesta = pokemon.toLowerCase();

    if (respuesta === Pokemons[MATCH].toLowerCase()) {
      toggleWon(true);
      setIsCorrectGuess(true);
      alert("¡Ganaste!");
    } else {
      alert("Error, intenta nuevamente");
    }
    setPokemon("");
  }

  const handleReload = () => window.location.reload();

  return (
    <div className={hasWon ? "pokemon-container won" : "pokemon-container"}>
      <div className="pokemon-header">
        {hasWon ? (
          <h2 className="pokemon-label">{Pokemons[MATCH]}</h2>
        ) : (
          <h2 className="pokemon-label">¿Quien es este Pokémon?</h2>
        )}
      </div>

      <img
        className="pokemon-image"
        height={560}
        width={560}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        style={{
          filter: isCorrectGuess ? "" : "brightness(0) invert(1)",
        }}
        alt={`Pokemon ${Pokemons[MATCH]}`}
      />

      {hasWon ? (
        <button className="pokemon-button" onClick={handleReload}>
          Play Again
        </button>
      ) : (
        <form className="pokemon-form" onSubmit={handleSubmit}>
          <input
            className="pokemon-input"
            type="text"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
            placeholder="Enter your guess"
          />
          <button className="pokemon-button" type="submit">
            Submit
          </button>
        </form>
      )}
      <div>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
