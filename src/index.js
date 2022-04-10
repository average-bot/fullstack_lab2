import React from "react";
import { createRoot } from "react-dom/client";
import retriever from "./retriever";
import App from './App';

// creating the root of the div id="root" element for the table
const theCont = document.getElementById('root');
const theRoot = createRoot(theCont);

var dataArr;
function buildTable(theRoot) {
    // retrieve the data from backend and get the localstorage items
    retriever.getData("courses");
    var courses = JSON.parse(localStorage.getItem("courses"));

    retriever.getData("students");
    var students = JSON.parse(localStorage.getItem("students"));

    retriever.getData("registrations");
    var registrations = JSON.parse(localStorage.getItem("registrations"));

    // "join" the information
    dataArr = [];
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

    // build the table from all the components and render on the page
    const el = <App data={dataArr} />;
    theRoot.render(el);
}
// build the table on page load
buildTable(theRoot);

// every minute update the information in the root by rebuilding the table
setInterval(function () {
    buildTable(theRoot);
    console.log("table")
}, 60 * 1000); // 1 minute
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