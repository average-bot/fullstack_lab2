import React from "react";
import { createRoot } from "react-dom/client";
import fetcher from "./fetcher";

//alert("hello");
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sandra" />;
const container = document.getElementById("index")
const root = createRoot(container);
root.render(element)

fetcher.showInfo();


/*<script src="index.js"></script>
<script src="fetcher.js"></script> */