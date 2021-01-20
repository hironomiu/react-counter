import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p> {count} </p>
      <button onClick={() => setCount(cnt => cnt + 1)}> + </button>
      <button onClick={() => setCount(cnt => cnt - 1)}> - </button>
    </>
  )
}

export default App
