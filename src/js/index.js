//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";
//import Home from "./component/home.jsx"

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));

let counter = 0
 setInterval(() => {
     //render your react application
     ReactDOM.render(<SimpleCounter counter={counter} />, document.querySelector("#app"));     
     // Incremento el contandor
     counter ++;
 }, 1000);