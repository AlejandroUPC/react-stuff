import React, {useState} from 'react'

export default function MyComponent (){
    const [car, setCar] = useState({year:2022, make: "tesla", model:"Y"});

    function changeMake(e) {
        setCar(prevCar => ({...prevCar, make: e.target.value}))
    }
    function changeModel(e) {
        setCar(prevCar => ({...prevCar, model:e.target.value}))
    }

    function changeYear(e) {
        setCar(prevCar => ({...prevCar, year:e.target.value}))
    }

    return (<>  
            <div>
                <p>Car {car.make} - {car.model} from {car.year}</p>
            </div>
            <div>
                <input type="text" value={car.make} onChange={changeMake}/><br />
                <input type="text"  value={car.model} onChange={changeModel}/><br />
                <input type="number" value={car.year} onChange={changeYear} /><br />
            </div>
        </>);
}