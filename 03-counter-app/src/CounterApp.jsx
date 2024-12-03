import { useState } from "react"

export const CounterApp = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Valor del contador es  {counter}</h1>
      <button onClick={increment} > incrementa contador + 1 </button>
      <button onClick={decrement}> decrementar contador -1 </button>
    </>
  )
}
