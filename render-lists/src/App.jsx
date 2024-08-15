import List from './List.jsx'
import './App.css'

function App() {
  const fruits = [{ name:"bannana", "price":1},
      { name:"apple", "price":2},
      { name:"orange", price:3},
      { name:"pear", price:4},
      { name:"melon", price:5},
  ]

  const clothes = [{name:"shirt", price:1}, {name:"shoes", price: 2}, {name:"socks", price: 3}]
  return (
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>} 
    {clothes.length > 0 && <List items={fruits} category="Clothes"/>}
    </>
    );
}

export default App
