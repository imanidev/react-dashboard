import React from 'react' 
import { useState } from 'react' // This is a hook

const Visitors = () => {
    const [count, setCount] = useState(0); 
    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
    <div className='Counter'>
    <h1>Counter: {count}</h1>
    <button onClick={incrementCount}>Click Me!</button>
    </div>
)
}

export default Visitors
