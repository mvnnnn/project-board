import React from "react";
import moment from "moment";
import { Glyphicon } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

import "./taskCard.scss";

import { Candidates } from "../../../services/candidateData";

const findProfilePic = name => {
  const candidate = Candidates.filter(data => data.name === name)[0];
  return candidate.pic;
};

class CardComponent extends React.Component {
  render() {
    const { card, categoryId, onClickOnCard } = this.props;

    return (
      <div className="card">
        <div className="card_grid">
          <div>
            <div>
              <h6>{card.task_title} </h6>
            </div>
          </div>

          <div className="card_container">
            <div className="card_avatar_container">
              {card.participant.map(candidate => (
                <img
                  alt={candidate}
                  src={findProfilePic(candidate)}
                  className="card_avatar"
                />
              ))}
              <Glyphicon
                glyph="plus-sign"
                onClick={() => onClickOnCard(card.task_id, categoryId)}
              />
            </div>

            <div className="card_calender">
              <span>
                {" "}
                <Glyphicon
                  glyph="calendar"
                  onClick={() => onClickOnCard(card.task_id, categoryId)}
                />
                {moment(card.date).format("DD MMM, YYYY")}
              </span>
            </div>
            <div
              className="card_progress"
              onClick={() => onClickOnCard(card.task_id, categoryId)}
            >
              <span>{card.progress} %</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
