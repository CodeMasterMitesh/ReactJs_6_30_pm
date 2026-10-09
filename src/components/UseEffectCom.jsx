import { useEffect, useState } from "react";

export const UseEffectCom = () => {
    // console.log("r");
    const [count ,setCount] = useState(0);

    useEffect(()=>{
      const intervalId = setInterval(()=>{
            setCount(() => count + 1);
            console.log(count);
        },1000);
        return () => clearInterval(intervalId);
    },[count]);
    
    return (
        <>
            <div>UseEffect Hooks</div>
            <div>{count}</div>
        </>
    )
}