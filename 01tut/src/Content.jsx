import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
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
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type="checkbox"
                onChange={() => HandleCheck(item.id)}
                checked={item.checked}
              />

              {/* Double click se check and Uncheck  */}
              <label
                onDoubleClick={() => HandleCheck(item.id)}>
                {item.item}
              </label>
              {/* <button>Delete</button> */}
              <FaTrashAlt
                // To delete we need item id
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your List is Empty</p>
      )}
    </main>
  )
}

export default Content