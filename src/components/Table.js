import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import React from 'react';
import dataArr from "..";

const Table = () => {
    const [tableData, setTableData] = useState(dataArr);

    const columns = [
        { label: "Student id", accessor: "student_id", sortable: true },
        { label: "Student name", accessor: "student_name", sortable: true },
        { label: "Course code", accessor: "course_code", sortable: true },
        { label: "Reg date", accessor: "reg_time", sortable: true },
    ];
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

export default Table;