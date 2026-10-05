import { useState } from "react"

export const LiftingUpState = ()=>{
    const [name,setName] = useState("");
    // console.log(name);
    return (
        <>
            <FormData name={name} setName = {setName} />
            <DisplayData name={name}/>
        </>
    )
}

const FormData = ({name,setName})=>{
    return (
        <>
            <label htmlFor="">Enter Your Name</label>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
        </>
    )
}

const DisplayData = ({name})=>{
    return (
        <>
            <div>My Name is {name}</div>
        </>
    )
}