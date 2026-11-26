const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

import { createStore } from "redux";

const initialState = {
    task : [],
}


const reducer = (state = initialState,action)=>{
    // console.log("latest action ",action);
    switch(action.type){
        case ADD_TASK :
            return {
                ...state,
                task : [...state.task,action.payload]
            }
        case DELETE_TASK : 
            const updatedState = state.task.filter((curEle,index)=>{
                return index != action.payload;
            })
            return {
                ...state,
                task : updatedState
            }

        default : return state;

    }

}

export const store = createStore(reducer);

const addTask = (data)=>{
    return {type:ADD_TASK,payload:data}
}

const deleteTask = (data)=>{
    return {type:DELETE_TASK,payload:data}
}

console.log("Initial state :",store.getState());

store.dispatch(addTask("Today I have 9:30 Python Demo"));

console.log(store.getState());

store.dispatch(addTask("Today I have 5:40 PM Python Lecture"));

console.log(store.getState());

// store.dispatch(deleteTask(1));

// console.log(store.getState());
