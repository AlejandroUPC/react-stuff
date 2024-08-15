//if I want the variable fom componentA user we'd meed to use PRops and propagate
//for every component(prop drilling), useContext helps
//here is the consumer
import React, {useContext} from 'react'
import {UserContext} from './ComponentA.jsx'


export default function ComponentD(){
    const user = useContext(UserContext)
    return(<div className="box">
        <h1>ComponentD</h1>
        <h2>{`Bye ${user}`}</h2>
    
    </div>)
}