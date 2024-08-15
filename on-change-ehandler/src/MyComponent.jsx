import React, {useState} from 'react';

function MyComponent () {
    const [name, setName] = useState("P3p3");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [badFood, setBadFood] = useState("")
    const [olivesSuck, setOlivesSuck] = useState("")
    const onNameChange  = (e) => {

        setName(e.target.value)
    }

    const onQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const onCommentChange = (e) => {
        setComment(e.target.value)
    }

    const onChangeBadFood = (e) => {
        setBadFood(e.target.value)
    }


    const onOlievsSuckChange = (e) => {
        setOlivesSuck(e.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={onNameChange}/>
            <p>Your name is {name}</p>
            <input type="number" value={quantity} onChange={onQuantityChange}/>
            <p>You bought {quantity} pepe coins</p>
            <textarea value={comment} onChange={onCommentChange} placeholder='If you like olives you are banned '></textarea>
            <p>Comment: {comment}</p>
            <select value={badFood} onChange={onChangeBadFood}>
                <option value="">Pick one</option>
                <option value="black olive">Black Olive</option>
                <option value="green olive">Green Olive</option>
                <option value="all olives">All Olives</option>
            </select>
            <p>Are you sure you like olives? You said {badFood} suck</p>
            <label>Do olives suck?</label><input name='olives-suck' type="radio" onChange={onOlievsSuckChange} value="of course"/>
            <label>Do you like olives?</label><input name='olives-suck' type="radio" onChange={onOlievsSuckChange} value="reconsider your life choices"/>
            <p>can we be friends? {olivesSuck}</p>
        </div>

    );
}

export default MyComponent