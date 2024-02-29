import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    return (
      <>
        <div
          style={{ width: "160px", height: "220px" }}
          className="cardBackColor"
        >
          <img
            src={`https://robohash.org/test${this.props.id}`}
            alt="robo"
            width="150px"
            height="150px"
            className="imageStyle"
          ></img>
          <p className="nameStyle">{this.props.name}</p>
          <p className="emailStyle">{this.props.email}</p>
        </div>
      </>
    );
  }
}
export default Card;
