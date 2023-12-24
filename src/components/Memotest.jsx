import { useEffect, useState } from "react";
import "../styles/Memotest.css";
import { Link } from "react-router-dom";

const images = [
  "https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/mysql-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/github-original-wordmark.svg?size=128&color=currentColor",
];
const hiddenImageUrl =
  "https://icongr.am/clarity/unknown-status.svg?size=128&color=currentColor";

const createCard = (id, imageUrl) => ({ id, imageUrl, isGuessed: false });

const Memotest = () => {
  const [cards, setCards] = useState(
    images
      .flatMap((image, index) => [
        createCard(`a|${index}`, image),
        createCard(`b|${index}`, image),
      ])
      .sort(() => Math.random() - 0.5)
  );

  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.imageUrl === secondCard.imageUrl) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isGuessed: true }
              : card
          )
        );
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (cards.every((card) => card.isGuessed)) {
      alert("¡Ganaste!");
      location.reload();
    }
  }, [cards]);

  const handleCardClick = (card) => {
    if (selectedCards.length < 2 && !selectedCards.includes(card)) {
      setSelectedCards((prevSelected) => [...prevSelected, card]);
    }
  };

  return (
    <>
    <div>
      <Link to='/'>
      <button>Volver</button>
      </Link>
    </div>
      <div>
        <h1 style={{ textAlign: "center", padding: 50 }}>
          Memotest de Tecnologías
        </h1>
      </div>
      <div>
        <ul className="card-list">
          {cards.map((card) => (
            <li
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card)}
            >
              {card.isGuessed || selectedCards.includes(card) ? (
                <img alt="icon" src={card.imageUrl} />
              ) : (
                <img alt="icon" src={hiddenImageUrl} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Memotest;
