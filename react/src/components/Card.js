import "../styles/card.scss";

function Card({ name, imageUrl, totalTimesSeen }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="{name}" />
      <div className="card-details">
        <p className="airplane-name">{name}</p>
        <div className="total-times-container">
          <p>Total times seen: </p>
          <div className="total-times-incrementer">
            <button>-</button>
            <p>{totalTimesSeen}</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
