import React, { useState } from "react";

const Counter = function () {
    let [counter,SetCounter] = useState(0)
function increment() {
    SetCounter( counter += 1)
}
function decrement () {
    SetCounter( counter -= 1)
}
return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}> increment </button>
        <button onClick={decrement}> decrement </button>
    </div>
)

}

export default Counter;