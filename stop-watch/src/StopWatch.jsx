import React, {useState, useEffect, useRef} from 'react'
export default function StopWatch() {

    const [isRunning, setIsRunning] = useState(false) //initial value and clear st ate
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() =>{
        if (isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)},
                 10)
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
        
     }, [isRunning])

    function startTimer(){
        console.log(isRunning)
        if (!isRunning){
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime;
    }
    }
    function stopTimer(){
        setIsRunning(false)}
    function resetTimer(){
        setElapsedTime(0)
    }
    function formatTime(){
        const hours = String(Math.floor(elapsedTime / (1000*3600))).padStart(2, "0")
        const minutes =  String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, "0");
        const seconds = String(Math.floor(elapsedTime / (1000) %60)).padStart(2, "0");
        const milliseconds = String(Math.floor((elapsedTime % 1000) /10)).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }
    return (<>
        <div className="stop-watch">
            <p>{formatTime(elapsedTime)}</p>
            <div className="stop-watch-buttons">
                <button className='start' onClick={startTimer}>Start</button>
                <button className='stop' onClick={stopTimer}>Stop</button>
                <button className='reset' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    </>);
}