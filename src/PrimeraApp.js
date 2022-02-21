import React, { Fragment } from "react";
import propTypes from 'prop-types';

const PrimeraApp = ( {saludo="Unamba"}) =>{

    return(
         
        <>
             <h1>{ saludo }</h1>

            <p>parrafo - parrafo</p>
        </>

    );

//return <h1>hola mundo </h1>

}

PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired,
}
export default PrimeraApp;