// React hook -> Function that allows functional components to use React faetures without writting class componenets (userState,useEffect)
// userState allows to create a virtual variable and a setter function to manage it in the DOM.
import Counter from './Counter.jsx'
import './App.css'

function App() {
  return (
  <Counter/>
  );
}

export default App
