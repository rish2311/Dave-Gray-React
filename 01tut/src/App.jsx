// import { useState } from 'react'

import './App.css'

function App() {
  const handlenameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello {handlenameChange()}</h1> 
    </div>
  )
}

export default App
