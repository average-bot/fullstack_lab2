import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import React from 'react';

function table(data) {
    // Set the state of the table to be the array of data
    var [tableData, setTableData] = useState(data.data);
    // columns with corresponding names from data array of objects
    const columns = [
        { label: "Student id", accessor: "student_id", sortable: true },
        { label: "Student name", accessor: "student_name", sortable: true },
        { label: "Course name", accessor: "course_name", sortable: true },
        { label: "Reg date", accessor: "reg_time", sortable: true },
    ];
    // sorting algorithm
    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);
        }
    };
    // return the headers and (sorted) table elements as a table
    return (
        <>
            <table className="table">
                {/* ... */}
                <TableHead columns={columns} handleSorting={handleSorting} />
                <TableBody columns={columns} tableData={tableData} />
            </table>
        </>
    );
};

export default table;