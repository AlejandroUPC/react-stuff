import React, {useState} from 'react'
export default function MyComponentArray() {
    const [fruits, setFruits] = useState([])
    
    function addFruit() {
        const newFoodInput = document.getElementById("fruit").value
        setFruits(prevFruits => [...prevFruits, newFoodInput])
        document.getElementById("fruit").value = ""
    }
    
    function removeFruit(idx) {
        setFruits(previFruits => [previFruits.filter((_,i) => i != idx)])
    }
    return(<>
    <div id="fruit-list">
        <ul>
            {fruits.map((fruit, idx) =>   <li key={idx} onClick={() => removeFruit(idx)}>{fruit}</li> )}
        </ul>
    </div>
    <input type="text" name="fruit-name" id="fruit" /> <br />
    <button id="add-fruit" onClick={addFruit}>Add item</button>
    </>);
}