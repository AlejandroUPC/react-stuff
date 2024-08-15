import React, {useState} from 'react';

function Counter() {
    const [value, setValue] = useState(0); //array with two elements, the variable and setterfunction
    // update functions when react batches seValues and cleaner
    const alterCounter = (e) => {
        if (e.target.className === "increase") {
            setValue(prevVal => prevVal + 1) //we use pending state instead of current state, reacts puts the calls into a queue and next render it executes.
        }
        if (e.target.className === "decrease") {
            setValue(prevVal => prevVal - 1)
        }
        if (e.target.className === "reset"){
            setValue(0)
        }
    } 
    return(<div>
            <p>Value: {value}</p>
            <button onClick={alterCounter} className="increase">+</button>
            <button onClick={alterCounter} className="decrease">-</button>
            <button onClick={alterCounter} className="reset">R</button>
            </div>)
}

export default Counter