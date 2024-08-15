import React, {useState, useEffect} from 'react';

export default function MyComponent(){

    const [count, SetCount] = useState(0);
    const [color, setColor] = useState('green');
//    useEffect(() =>{document.title = `${count}`}) //refresh html title page when a componente re-renders also upgrades the title, this is on every render.

    useEffect(() => {document.title = `Loaded ${count} on ${color}`}, [count]) //only runs when the title is added to the dom, when I add an array it will only update on mount + change, in this example veery similar to above.
    
    function addCount() {
        SetCount(c => c+1)
    }
    function subCount(){
        SetCount(c => c-1)
    }

    function changeColor(){
        setColor(prevColor => color === "green" ? "red" : "green");
    }

    return (<>
            <p style={{color: color}} >{count} - {color}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Substract</button><br />
            <button onClick={changeColor}>Change Color</button>
         </>
         );
}