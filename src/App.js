import React from 'react';
import Table from "./components/Table";
import "./style.css"


// with the help of https://blog.logrocket.com/creating-react-sortable-table/

const App = () => {
    return (
        <div className="table_container">
            <Table />
        </div>
    );
};

export default App;