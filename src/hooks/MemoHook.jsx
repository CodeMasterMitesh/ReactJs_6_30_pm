import { useState } from "react"
import ChildComp  from "./ChildCompo";

export const MemoHook = ()=>{
    const [count,setCount] = useState(0);

    const handleClick = ()=>{
        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Inc</button>
            <ChildComp/>
        </>
    )
}