import React from "react";
import "./style.css";

const Header = props => (
    <div className="header">
        <div className="header-right">
            <h4>{props.rightWrong}</h4>
        </div>
    </div>
)
export default Header;