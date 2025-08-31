import React from 'react'

const Content = () => {
  const handlenameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log("You clicked");
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.name);
  }

  return (
    <main>
      <p>
        Hello {handlenameChange()}
      </p>

      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Dave')}>Click Name</button>
      <button onClick={(e) => handleClick3(e)}>Click Name 3</button>

    </main>
  )
}

export default Content