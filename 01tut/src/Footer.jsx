import React from 'react'

const Footer = () => {
  // const today = new Date();

  return (
    <footer>
      {/* Copyright &copy; {today.getFullYear()} */}
      <p>{length} List {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer