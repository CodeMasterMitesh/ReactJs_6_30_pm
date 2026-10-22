import { useContext } from "react"
import { ContextData } from "./UseContextHook";


export const ParentCom = ()=>{
    return (
        <>
            <div>This is Parent Compo.</div>
            <ChildCompo />
        </>
    )
}

const ChildCompo = ()=>{
    return (
        <>
            <div>This is Child Compo.</div>
            <GrandChild/>
        </>
    )
}


const GrandChild = ()=>{
    const {data,data1} = useContext(ContextData);
    console.log(data1); 
    return (
        <>
            <div>This is Grand Child Compo.</div>
            <p>Name is : {data1.name}</p>
            <p>Address is : {data1.address}</p>
            <p>Education is : {data1.education}</p>
            <GreatGrandChildCompo />
        </>
    )
}

const GreatGrandChildCompo = ()=>{
    const {data,data1} = useContext(ContextData);
    // console.log(data);
    return (
        <>
            <div>This is Great Grand Child Compo.</div>
            <p>Name is : {data.name}</p>
            <p>Address is : {data.address}</p>
            <p>Education is : {data.education}</p>
        </>
    )
}