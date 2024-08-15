import Student from './Student.jsx'
import './App.css'

function App() {
  return (<>
          <Student name="Foo" age={10} isStudent={false}/> 
          <Student name="Bar" age={12} isStudent/>
          <Student/>
          </>

  );
}

export default App
