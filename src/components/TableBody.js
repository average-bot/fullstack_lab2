import React from 'react';
import "./../style.css"

// creating the data part of the table
function tableBody({ tableData, columns }) {
    return ( // mapping the sorted data body to the right columns and displaying it
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        {columns.map(({ accessor }) => {
                            const tData = data[accessor] ? data[accessor] : "——";
                            return <td key={accessor}>{tData}</td>;
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

export default tableBody;