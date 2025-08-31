import React from 'react'

// const Header = (props) => { 


const Header = ({ title }) => { 
  // Destructured the title
  return (
    <header style={{
      backgroundColor: 'blue',
      color: '#fff'
    }}>
      <h1>{title}</h1>
    </header>
  )
}

// default Props (Agar title nahi bheje, to error handle kar lega)
Header.defaultProps = {
  title: 'Default Title'
}

export default Header