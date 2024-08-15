import React, {useState} from 'react'

export default function MyComponentArrayObjects () {
    //{year:2022, make: "tesla", model:"Y"}
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState();
    const [carMake, setCarMake] = useState();


    function addCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(prevCars => [...prevCars, newCar] )
        setCarYear(new Date().getFullYear())
        setCarModel("")
        setCarMake("")
    }
    function removeCar(idx)
    {
        setCars(c => c.filter((_,i) => i !== idx))
    }

    function changeMake(e) {
        setCarMake(e.target.value)
    }
    function changeModel(e) {
        setCarModel(e.target.value)
    }

    function changeYear(e) {
        setCarYear(e.target.value)
    }

    return (<>  
            <div>
                <h2>Cool cars</h2>
                <ul>
                    {cars.map((car, idx) =>  <li key={idx} onClick={() => removeCar(idx)}>Car {car.make} - {car.model} from {car.year}</li>)}
                </ul>
                <p></p>
            </div>
            <div>
                <input type="text" value={carMake} onChange={changeMake}/><br />
                <input type="text" value={carModel} onChange={changeModel}/><br />
                <input type="number" value={carYear} onChange={changeYear} /><br />
                <button onClick={addCar}>Add car</button>
            </div>
        </>);
}