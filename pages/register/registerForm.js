import {useState} from 'react'

function registerForm() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <h1>{count}</h1>
    <form onSubmit={e => e.preventDefault()}>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setCount(0)}>
        reset
      </button>
    </form>
    </>
  )
 
}

export default registerForm  