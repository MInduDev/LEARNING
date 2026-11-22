import Card from "./components/Card";
import "./App.css";

function App() {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1 description",
      image: "/images/card1.jpg"
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2 description",
      image: "/images/card2.jpg"
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3 description",
      image: "/images/card3.jpg"
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4 description",
      image: "/images/card4.jpg"
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5 description",
      image: "/images/card5.jpg"
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is card 6 description",
      image: "/images/card6.jpg"
    },
    {
      id: 7,
      title: "Card 7",
      description: "This is card 7 description",
      image: "/images/card7.jpg"
    },
    {
      id: 8,
      title: "Card 8",
      description: "This is card 8 description",
      image: "/images/card8.jpg"
    },
    {
      id: 9,
      title: "Card 9",
      description: "This is card 9 description",
      image: "/images/card9.jpg"
    },
    {
      id: 10,
      title: "Card 10",
      description: "This is card 10 description",
      image: "/images/card10.jpg"
    },
    {
      id: 11,
      title: "Card 11",
      description: "This is card 11 description",
      image: "/images/card11.jpg"
    },
    {
      id: 12,
      title: "Card 12",
      description: "This is card 12 description",
      image: "/images/card12.jpg"
    }
  ];

  return (
    <div className="app">
      <h2>All the cards are here.</h2>

      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
