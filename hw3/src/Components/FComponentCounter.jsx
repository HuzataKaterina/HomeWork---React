import React, { useState } from 'react';

const FComponentCounter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <>
    <h2>Count: {count}</h2>

    <button onClick={increment}>Додати +</button>
    <button onClick={decrement}>Відняти -</button>
    </>
    
  )
}

export default FComponentCounter