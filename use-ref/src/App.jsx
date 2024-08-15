//useState -> rerenders whhen the state value changes
//useRef -> uses references, does not cause re-renders on value change
// used when you want a component to remember smth but you dont want
//to trigger a re-render, use:
// 1.Accesing/Interacting with dom elements
// 2.Handling focus, animatoins or transformnations
// 3.Manage timers and intervals

import MyComponent from './MyComponent.jsx'
import './App.css'

function App() {
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default App
