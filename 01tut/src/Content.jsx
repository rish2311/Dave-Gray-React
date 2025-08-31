import React from 'react'
// import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = ({ items, HandleCheck, handleDelete }) => {

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