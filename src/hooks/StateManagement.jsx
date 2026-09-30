import { useState } from "react";
export const StateManagement = () =>{
    const btnCss = {
        display:"inline-block",
        width:"150px",padding:"10px",
        border:"none",
        backgroundColor:"royalblue",
        color:"white"
    }   
    
    // console.log(useState(1));
    const [count,setCounter] = useState(0)
    console.log(count);
    const handleClick  = () =>{
        // count++; // error
        // console.log("Event Fire.");
        // console.log(data);
        setCounter(()=>count + 1);
        console.log(count);
    }
    return (
        <>  
            <div>{count}</div>
            <button style={btnCss} onClick={handleClick}>Click</button>
        </>
    )
}