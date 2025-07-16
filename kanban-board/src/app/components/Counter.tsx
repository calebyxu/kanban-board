'use client';

import { useState } from 'react';
 
function Counter() {
    const [counter, setCounter] = useState(0);

    function clickCounter() {
        setCounter(counter + 1);
    }

    return (
        <button onClick={clickCounter}>
            hello, you have pressed this button {counter} times
        </button>
    )
}

export default Counter;