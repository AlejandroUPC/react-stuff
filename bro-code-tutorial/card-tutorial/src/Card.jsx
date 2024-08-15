import profilePic from './assets/tit-8620213_1280.webp'
function Card(){
    return (
        <div className="card">
                <img src={profilePic} alt="a bird" className="card-image"/>
                <h2 className="card-title">AlejandroUPC</h2>
                <p className="card-text">Feeding the birds!</p></div>
    );
}

export default Card