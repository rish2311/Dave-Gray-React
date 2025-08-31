// import { useState } from 'react'

import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  // const [count, setCount] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,   // numeric
      checked: true, // Boolean
      // Checkbox true/false k liye add Handler
      item: "One half pound of bag" // string
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: true,
      item: "Item 3"
    },
  ]);

  // Id is key of each item 
  const HandleCheck = (id) => {
    console.log(`key: ${id}`)
    // conditional Rendering 
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    // Adding the localStorage feature
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    // console.log(id)
    // filter creates a new array, with only ids not passed in
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className='App'>
      <Header title="Grocery List" />
      <Content
        items={items}
        // setItems={setItems}
        handleDelete={handleDelete}
        HandleCheck={HandleCheck}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
