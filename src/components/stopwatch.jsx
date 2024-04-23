import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'

function StopWatch() {
  const [seconds, setSeconds] = useState(0)
  const [action, setAction] = useState(false)

  useEffect(() => {

    let interval;

    if (action) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
        console.log("Hello")
      }, 1000)
    } else (
      clearInterval(interval)
    )
    
    return () => clearInterval(interval)
  }, [action])

  const start = () => {
    setAction(true)
  }

  const stop = () => {
    setAction(false)
  }

  const reset = () => {
    setAction(false)
    setSeconds(0)
  }

  return (
    <>
      <p>{seconds}</p>
      <button onClick={start} disabled={action}>Start</button> 
      <button onClick={reset}>Reset</button>
      <button onClick={stop} disabled={!action}>Stop</button>
    </>
  )

    
}

export default StopWatch
