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

retriever.getData("courses");
let courses = JSON.parse(localStorage.getItem("courses"));

retriever.getData("students");
let students = JSON.parse(localStorage.getItem("students"));

retriever.getData("registrations");
let registrations = JSON.parse(localStorage.getItem("registrations"));


console.log(courses[1].course_code);
console.log(students[1].unit_id);
console.log(registrations[1].course_code);