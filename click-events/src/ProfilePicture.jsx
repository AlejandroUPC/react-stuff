function ProfilePicture () {
    const imagePath = "./src/assets/pp.jpg";
    const handleClick = (e) => e.target.style.display = "none";
    return(<img onClick={handleClick} src={imagePath}></img>);
}

export default ProfilePicture