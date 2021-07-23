import Card from "./Card";
import "../styles/cardList.scss";
import c172Skyhawk from "../images/cessna-172-skyhawk.jpg";

function CardList() {
  return (
    <div className="card-list">
      <Card
        name="Cessna 172 Skyhawk"
        imageUrl={c172Skyhawk}
        totalTimesSeen={20}
      />
      <Card
        name="Cessna 172 Skyhawk"
        imageUrl={c172Skyhawk}
        totalTimesSeen={20}
      />
      <Card
        name="Cessna 172 Skyhawk"
        imageUrl={c172Skyhawk}
        totalTimesSeen={20}
      />
      <Card
        name="Cessna 172 Skyhawk"
        imageUrl={c172Skyhawk}
        totalTimesSeen={20}
      />
    </div>
  );
}

export default CardList;
