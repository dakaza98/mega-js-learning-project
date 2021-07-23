import Card from "./Card";
import "../styles/cardList.scss";
import c172Skyhawk from "../images/cessna-172-skyhawk.jpg";
import b737 from "../images/boeing-737.jpg";
import aBeluga from "../images/airbus-beluga.jpg";
import pa28 from "../images/piper-pa28.jpg";

function CardList() {
  return (
    <div className="card-list">
      <Card
        name="Cessna 172 Skyhawk"
        imageUrl={c172Skyhawk}
        totalTimesSeen={20}
      />
      <Card name="Boeing 737" imageUrl={b737} totalTimesSeen={52} />
      <Card name="Airbus Beluga XL" imageUrl={aBeluga} totalTimesSeen={30} />
      <Card name="Piper PA-28" imageUrl={pa28} totalTimesSeen={14} />
    </div>
  );
}

export default CardList;
