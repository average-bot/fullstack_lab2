import React from "react";
import { createRoot } from "react-dom/client";
import retriever from "./retriever";

//alert("hello");
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sandra" />;
const container = document.getElementById("index")
const root = createRoot(container);
root.render(element)

var courses = retriever.getData("courses");
console.log(courses);
//console.log(courses[0]);