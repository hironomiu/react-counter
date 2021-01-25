import React, { useState } from 'react'

const App = (props) => {
  const [count, setCount] = useState(0)
  const [message,setMessage] = useState(props.message)

  return (
    <>
    <h1>hoge</h1>
      <p> {message}：{count} </p>
      <button onClick={() => setCount(cnt => cnt + 1)}> + </button>
      <button onClick={() => setCount(cnt => cnt - 1)}> - </button>
      <div>message : <input type="text" value={message} onChange={e => setMessage(msg => msg = e.target.value)}/></div>
    </>
  )
}
App.defaultProps = {
  message: 'hello'
}

export default App
