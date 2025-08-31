// import { useState } from 'react'

import './App.css'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {

  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Hello {handlenameChange()}</h1>  */}
      <Header />
      <Content />
      <Footer />
    </div>

  )
}

export default App
