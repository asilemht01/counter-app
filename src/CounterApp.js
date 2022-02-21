import React,{useState} from "react";
import propTypes from 'prop-types';
const CounterApp =({value})=>{

    //just
    const [counter, setCounter] = useState(0);



    //los handleAdd se definen ahi 

   /* const handleAdd= (e) =>{
          setCounter(counter +  1)
    }*/
    const handleAdd= (e) =>setCounter(counter +  1)
    const reset= (e) =>setCounter(0)
    const menos= (e) =>setCounter(counter - 1)
  
    return(
        <>
             <h1>CounterApp</h1>
             <h2>{ counter }</h2>
             <button onClick={ handleAdd }>+1</button>
             <button onClick={ reset }>Reset</button>
             <button onClick={ menos }>-1</button>
        </>
    )
}
CounterApp.propTypes = {
    value: propTypes.number.isRequired,
}
CounterApp.defaultProps= {
    value:0
}

export default CounterApp;
