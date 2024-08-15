import React, {useState, useEffect, useRef} from 'react'
export default function MyComponent(){
    //const [number, setNumber] = useState(0);// using this every click <re-renders>
    const ref = useRef(0) //can also be added to html elements with the ref attr.
    //we prove using useEffect without depdencnies

    useEffect(() => {console.log("I re-rendered")})
    function addNumber(){
        //setNumber(n => n+1)
        ref.current++; //this will not change in refresh if w dont re-render
    }
    return(<>
        <button onClick={addNumber}>Click me!</button> 
        <p>{ref.current}</p> 
    </>);
}