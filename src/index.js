import React from "react";
import ReactDOM from "react-dom";

alert("hello");
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sandra" />;
ReactDOM.render(element, document.getElementById("index"));