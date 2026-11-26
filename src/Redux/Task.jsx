import { useSelector } from "react-redux"

export const Task = ()=>{
    const taskData = useSelector((store)=> store.task);
    console.log("task Data : ",taskData);
    return (
        <>
            <h1>Task Management</h1>
            <ul>
                {
                taskData.map((curEle,idx)=>{
                    return (
                        <li key={idx}>{curEle}</li>
                    )
                })
                }
            </ul>
        </>
    )
}