import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => (
    <div className="col-12 score-board">
        <p>Score: {props.currScore} | Top Score: {props.topScore}</p>
    </div>
);

export default ScoreBoard;