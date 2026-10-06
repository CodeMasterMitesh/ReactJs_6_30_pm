import { useState } from "react";

export const Todo = ()=>{
    const [inputValue,setinputValue] = useState("");
    const [task,setTask] = useState([]);

    const handleInput = (value) =>{
        setinputValue(value);
        // console.log(inputValue);
    }
    
    const handleTaskForm = (e)=>{
        e.preventDefault();
        // console.log("Submit Event Fire.");
        setTask([...task,inputValue]);
        console.log(inputValue);
        setinputValue("");
    }

    return (
        <>
            <form onSubmit={handleTaskForm}>
                <label htmlFor="">Task : </label>
                <input type="text" name="task" value={inputValue} placeholder="Enter Task" onChange={(e) => handleInput(e.target.value)} />
                <input type="submit" value={"Submit"} />
            </form>
            <div>
                <ul>
                    {task.map((ele,index)=>{
                    return (
                        <li key={index}>
                            {ele}
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}