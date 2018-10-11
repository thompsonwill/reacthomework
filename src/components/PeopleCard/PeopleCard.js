import React from "react";
import "./style.css";

const PeopleCard = props => (
    <div className="grid-container">
        <div className="card grid-item" id={props.id}>
            <img className="card-img-top" src={props.image} alt={props.name} onClick={() => props.handleClick(props.id)}/>
        </div>
    </div>
);

export default PeopleCard;