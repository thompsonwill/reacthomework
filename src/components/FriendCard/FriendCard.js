import React from "react";

const FriendCard = props => (
    <div class="card" style="width: 18rem;" id={props.id}>
        <img class="card-img-top" src={props.image} alt={props.name}/>
    </div>
);

export default FriendCard;