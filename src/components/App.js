import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [message, setMessage] = useState(props.message)

  return (
    <>
      <Header count={count} />
      <p>
        {" "}
        {message}：{count}{" "}
      </p>
      <button onClick={() => setCount((cnt) => ++cnt)}> + </button>
      <button onClick={() => setCount((cnt) => --cnt)}> - </button>
      <div>
        message :{" "}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage((msg) => (msg = e.target.value))}
        />
      </div>
      <Footer />
    </>
  )
}
App.defaultProps = {
  message: "hello",
  count: 0,
}

export default App
