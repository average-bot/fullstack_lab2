import React from 'react';
import { useState } from "react";
import "./../style.css"

// creating the header part of the table
const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
    // the order of sorted elements is either desc or asc
    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };
    return ( // clickable headers that trigger sorting
        <thead>
            <tr>
                {columns.map(({ label, accessor, sortable }) => {
                    return (
                        <th
                            key={accessor}
                            onClick={sortable ? () => handleSortingChange(accessor) : null}
                        >
                            {label}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;