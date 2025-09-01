import React from 'react'
import LineItem from './LineItem';

const ItemList = ({ items, HandleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          HandleCheck={HandleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList