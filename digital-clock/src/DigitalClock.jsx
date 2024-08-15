import React, {useState, useEffect} from 'react'
export default function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(setTime(new Date()),1000)
        return () => {clearInterval(intervalId)}
    }, [time]);
    return(
        <>
        <div className="clock-container"> 
            <div className="clock-timer">
                <p>{time.toTimeString().split(" ")[0]} {time.getHours() >= 12 ? "PM" : "AM"}</p>
            </div>

        </div>
        </>
    )
}