import React from 'react' 
import { useState } from 'react' // This is a hook

const Counter = () => {
    const [count, setCount] = useState(1); 
    
    function incrementCount() {
    if (count < 10) {
setCount(count + 1);
    }
}

function decrementCount() {
    if (count > 1) {
    setCount(count - 1);
    }
}


    return (
    <div className='Counter'>
            <h4>On a scale 1-10 <br></br>
                Rate your experience:</h4>
            <div className='countObject'>{count}</div>
    <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button className='submit'>Submit</button>
    </div>
)
}

export default Counter
