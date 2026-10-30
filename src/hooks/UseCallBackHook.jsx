import { memo, useCallback, useState } from "react"

export const Button = ({onClick,children})=>{
    console.log("This is Child Compo.",children);
    return(
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
};

export const UseCallBackHook = ()=>{
    const [count,setCount] = useState(0);

    const increment = useCallback(()=>{
        console.log("Increment Function.");
        setCount((prev) => prev + 1);
    },[]);

    const decrement = useCallback(()=>{
        console.log("Decrement Function.");
        setCount((prev) => prev - 1);
    },[]);

    // const increment = ()=>{
    //     setCount(count + 1);
    // };

    // const decrement = ()=>{
    //     setCount(count - 1);
    // }

    return(
        <>
            <h1>{count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button> 
        </>
    )

}

