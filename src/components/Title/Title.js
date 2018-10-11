import React from "react";
import "./style.css";

const Title = props =>( 
<div className="title">
    <h2 className="title">{props.children}</h2>;
</div>
);
export default Title;