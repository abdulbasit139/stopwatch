import { useEffect } from "react"
import { useState } from "react"

const Lifecycle = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        console.log("Component Mounted")

        return() => console.log("compoenent Unmounted")

    }, [])

    useEffect(() => {
        console.log("Component Updated")
    }, [count])

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Update</button>        
        </>
    )

}

export default Lifecycle