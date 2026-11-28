import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask } from "./Store";

export const Task = ()=>{
    const[task,setTask] = useState("");
    const [num,setNum] = useState(1);

    useEffect(()=>{
        setNum((prv) => prv  + 1);
    },[]);

    const dispatch = useDispatch();
    // console.log(dispatch);
    const taskData = useSelector((store)=> store.task);
    // console.log("task Data : ",taskData);

    const formHandler = (e)=>{
        e.preventDefault();
        // console.log(task);
        dispatch(addTask(task));
        return setTask("");
    }

    const handleDelete = (id)=>{
        return dispatch(deleteTask(id));
    }

    // console.log("i",data);
    return (
        <>
            <h1>Task Management</h1>
            <form onSubmit={formHandler}>
                <label htmlFor="">Add Task</label> : 
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} name="task" placeholder="Add Task" />
                <input type="submit" value={"Add Task"}/>
            </form>
            <ul>
                {
                taskData.map((curEle,idx)=>{
                    return (
                        <>
                            <li key={idx}>{num} - {curEle}</li><button onClick={()=>handleDelete(idx)}>Delete</button>
                        </>
                    )
                })
                }
            </ul>
        </>
    )
}