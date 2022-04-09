import React from "react";
import { createRoot } from "react-dom/client";
import retriever from "./retriever";
import App from './App';

// retrieve the data from backend and get the localstorage items
retriever.getData("courses");
var courses = JSON.parse(localStorage.getItem("courses"));

retriever.getData("students");
var students = JSON.parse(localStorage.getItem("students"));

retriever.getData("registrations");
var registrations = JSON.parse(localStorage.getItem("registrations"));

// "join" the information
var dataArr = [];
students.forEach(student => {
    registrations.forEach(registration => {
        if (student.unit_id == registration.student_id) {
            courses.forEach(course => {
                if (registration.course_code == course.course_code) {
                    dataArr.push(
                        {
                            id: registration._id,
                            student_id: student.unit_id,
                            student_name: student.full_name,
                            course_code: course.course_code,
                            reg_time: registration.unix_timestamp
                        }
                    );
                }
            });
        }
    });
});
//console.log(dataArr);

const el = <App data={dataArr} />;
const theCont = document.getElementById('root');
const theRoot = createRoot(theCont);
theRoot.render(el);
export default dataArr;

/* // the first function that returns a react object
//alert("hello");
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sandra" />;
const container = document.getElementById("index")
const root = createRoot(container);
root.render(element)
*/