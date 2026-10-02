import { useState } from "react";
export const StateManagement = () =>{
    const btnCss = {
        display:"inline-block",
        width:"150px",padding:"10px",
        border:"none",
        backgroundColor:"royalblue",
        color:"white"
    }   


    const containerCss = {
        height:"100vh",
        display : "flex",
        justifyContent :"center" ,
        alignItems:"center",
        flexDirection:"column",
    }
    
    // console.log(useState(1));
    const [count,setCounter] = useState(0)
    // console.log(count);
    const handleClick  = () =>{
        // count++; // error
        // console.log("Event Fire.");
        // console.log(data);
        setCounter(()=>count + 1);
        console.log(count);
    }
    console.log("New Component Re Render.");
    return (
        <>  
            <div className="container" style={containerCss}>
                <div>{count}</div>
                <button style={btnCss} onClick={handleClick}>Click</button>
            </div>
            <NewCompo data={count} />
        </>
    )
}



const NewCompo = (props)=>{
    console.log("Child Compo : ",props.data);
    return (
        <>
            <div>Child Compo</div>
        </>
    )
}