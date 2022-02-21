import React from "react";
import ReactDOM from 'react-dom';
import CounterApp from "./CounterApp";
import './index.css';
//import PrimeraApp from "./PrimeraApp";



//optenemos el elemento con el id root de la pagina
const divRoot = document.querySelector('#root');

//renderizar la pagina

ReactDOM.render(<CounterApp/>, divRoot);