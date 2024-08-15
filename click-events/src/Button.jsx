function Button() {
    const handleClick = (e) =>  e.target.textContent = "wops";
    return(<button onDoubleClick={(e) => handleClick(e)}>Do it</button>)
}

export default Button