import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(1);
    function handleclick(){
        setCount(count+1)
        // console.log(count);
    }
    return(
        <button className="counter" onClick={handleclick}> Counter {count}</button>
    )
}
export default Counter;