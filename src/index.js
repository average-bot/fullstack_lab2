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

    registrations.sort(function (a, b) {
        var c = new Date(a.unix_timestamp);
        var d = new Date(b.unix_timestamp);
        return d - c;
    });
    const reg_array = registrations.slice(0, 5);
    //console.log(reg_array);
    reg_array.sort(function (a, b) {
        var c = new Date(a.student_id);
        var d = new Date(b.student_id);
        return c - d;
    });

    // "join" the information
    dataArr = [];

    reg_array.forEach(reg => {
        courses.forEach(course => {
            if (reg.course_code == course.course_code) {
                students.forEach(student => {
                    if (student.unit_id == reg.student_id) {
                        dataArr.push(
                            {
                                id: reg._id,
                                student_id: student.unit_id,
                                student_name: student.full_name,
                                course_name: course.course_name,
                                reg_time: reg.unix_timestamp
                            });
                    }
                })
            }
        })
    })
    /*
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
        */
    //console.log(dataArr)
    // build the table from all the components and render on the page
    var el = <App data={dataArr} />;
    theRoot.render(el);
}
// build the table on page load
buildTable(theRoot);

// every minute update the information in the root by rebuilding the table
setInterval(function () {
    buildTable(theRoot);
}, 60 * 1000); // 1 minute
//export default dataArr;

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