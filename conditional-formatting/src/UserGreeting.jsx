import propTypes from 'prop-types'
function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-text">Welcome dudeeeee {props.userName}</h2>
    const leaveMessage = <h2 className="leave-text">leave</h2>
    return (props.isLoggedIn ? welcomeMessage : leaveMessage)
}


UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    userName: propTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}
export default UserGreeting