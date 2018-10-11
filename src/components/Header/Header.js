import React from "react";
import "./style.css";

const Header = props => (
    <div className="header">
        <div className="header-right">
            <h4>{props.rightWrong}</h4>
            <h5>Score: {props.score}</h5>
            <h5>High Score: {props.highScore}</h5>
        </div>
    </div>
)
export default Header;