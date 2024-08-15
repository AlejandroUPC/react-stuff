import React, {useState, useEffect} from 'react'

export default function ExampleUseEffect(){

    const [width, SetWidth] = useState(window.innerWidth);
    const [height, SetHeight] = useState(window.innerHeight);

    function handleResize() {
        SetWidth(window.innerWidth)
        SetHeight(window.innerHeight)
    }//at this point this wil not change until we add an event listener that listens to a resize event

    //window.addEventListener("resize", handleResize) //this already works, but when looking at the log console
    //its logging everytime the component re-renders we are adding a listener, adds 1k easier useEffect is cool
    useEffect(() => { 
        window.addEventListener("resize", handleResize)
        console.log("RESIZE")
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("REMOVEEE EL")
        }//we can add a return statment on useEffect to clean up usually, aka listeners most of the time
     }, [])//empty array only on mount
    useEffect(() => {
        document.title = `${height}x${width}`
    }, [height, width])
    return(<>
    <p>{height} x {width}</p>
    </>);
}