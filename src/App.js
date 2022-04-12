import React from 'react';
import Table from "./components/Table";
import "./style.css"


// with the help of https://blog.logrocket.com/creating-react-sortable-table/

function app(data) {
    //console.log(data.data);
    return (
        <div className="table_container">
            <Table data={data.data} />
        </div>
    );
};

export default app;