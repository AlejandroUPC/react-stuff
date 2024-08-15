// useEffect calls react when a component is re-rendered, mounts or the state of a value chanegs.
// 1. useEffect(() => {}) run after every rrerender
//2 .useEffect(() => {}, []) only on mount
//3. useEffect(() => {}, [value]) on mount + value change

//USES
// 1.Event Listeners
// 2 .DOM manipulation
// 3. subs to real time updates
// 4. fetching data from API
// 5. Clean up when component unmounts

import './App.css'
//import MyComponent from './MyComponent.jsx'
import ExampleUseEffect from './ExampleUseEffect.jsx'
function App() {
  return (
    <>
    <ExampleUseEffect/>
    </>
  )
}

export default App
