import React from 'react'
import ItemList from './ItemList'

const Content = ({ items, HandleCheck, handleDelete }) => {

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          HandleCheck={HandleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your List is Empty</p>
      )}
    </main>
  )
}

export default Content