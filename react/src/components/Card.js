import React from "react";
import "../styles/card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.imageUrl = props.imageUrl;

    this.state = {
      totalTimesSeen: props.totalTimesSeen,
    };
  }

  increase = () => {
    this.setState({ totalTimesSeen: this.state.totalTimesSeen + 1 });
  };

  decrease = () => {
    this.setState({ totalTimesSeen: this.state.totalTimesSeen - 1 });
  };

  render() {
    return (
      <div className="card">
        <img src={this.imageUrl} alt="{this.name}" />
        <div className="card-details">
          <p className="airplane-name">{this.name}</p>
          <div className="total-times-container">
            <p>Total times seen: </p>
            <div className="total-times-incrementer">
              <button onClick={this.decrease}>-</button>
              <p>{this.state.totalTimesSeen}</p>
              <button onClick={this.increase}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
