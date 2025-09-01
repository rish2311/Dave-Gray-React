import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, HandleCheck, handleDelete }) => {
  return (
    <li className='item' key={item.id}>
      <input
        type="checkbox"
        onChange={() => HandleCheck(item.id)}
        checked={item.checked}
      />

      {/* Double click se check and Uncheck  */}
      <label
        style={(item.checked) ? { textDecoration: 'line-through' } : {}}
        onDoubleClick={() => HandleCheck(item.id)}>
        {item.item}
      </label>

      {/* <button>Delete</button> */}
      <FaTrashAlt
        // To delete we need item id
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  )
}

export default LineItem