import { Button } from "bootstrap/dist/js/bootstrap.bundle.min"
// import { useState } from "react"

// export const UseReducerHook = ()=>{
//     const [count,setCount] = useState(0);
//     console.log(count);
//     const btnStyle = {
//         display : "inline-block",
//         width:"100px",
//         padding:"8px",
//         backgroundColor : "green",
//         border:"none",
//         borderRadius : "5px",
//         color: "white",
//     }

//     const handleClick = (t)=>{
//         console.log(t);
//         if(t === "inc"){
//             setCount(count + 1);
//         }else if(t === "dec"){
//             setCount(count - 1);
//         }
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button style={btnStyle} onClick={() => handleClick("inc")}>Inc</button>
//             <button style={btnStyle} onClick={() => handleClick("dec")}>Dec</button>
//         </>
//     )
// }


import { useReducer, useState } from "react"

export const UseReducerHook = ()=>{

    
    const reducer = (state,action)=>{
        console.log(state);
        console.log(action);
        if(action.type === "inc"){
           return state + action.n;
        }else if(action.type === "dec"){
            return state - action.n;
        }
    }
    const [count,dispatch] = useReducer(reducer,0);

    // console.log(count);
    // console.log(dispatch);
    const btnStyle = {
        display : "inline-block",
        width:"100px",
        padding:"8px",
        backgroundColor : "green",
        border:"none",
        borderRadius : "5px",
        color: "white",
    }

    return (
        <>
            <h1>{count}</h1>
            <button style={btnStyle} onClick={() => dispatch({type:"inc",n:1})}>Inc</button>
            <button style={btnStyle} onClick={() => dispatch({type:"dec",n:2})}>Dec</button>
        </>
    )
}