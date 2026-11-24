const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task : [],
}


const reducer = (state = initialState,action)=>{

    switch(action.type){
        case ADD_TASK :
            return {
                ...state,
                task : [...state,action.payload]
            }
        case DELETE_TASK : 
            const updatedState = state.task.filter((curEle,index)=>{
                return index != action.payload;
            })
            return {
                ...state,
                task : [...state,updatedState]
            }

        default : return state;

    }

}