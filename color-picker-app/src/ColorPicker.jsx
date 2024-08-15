import React, {useState} from 'react'

export default function ColorPicker() {
    
    const [color, setColor] = useState("#000000")
    const onColorChange = (e) => {
        setColor(e.target.value)

    }
    const colorPickeStyle = {  height: "300px",
                               width: "300px",
                               border: "2px solid black",
                               borderRadius: "50%",
                               display: "flex",
                               backgroundColor: color}
    return (<>
        <div className="color-picker-box" style={colorPickeStyle}>
            <p className="color-title">Color HEX</p>
            <label className="hex-value">{color}</label>
        </div>
        <input type="color" onChange={onColorChange} style={{margin: "10px"}}/>

    </>);  

}