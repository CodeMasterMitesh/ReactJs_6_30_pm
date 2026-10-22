import { createContext } from "react";

export const ContextData = createContext();


export const ContextProvider = ({children})=>{
    const data =  {
        name : "Vishv",
        address : "Ahmedabad",
        education : "B.Tech",
    }

    const data1 =  {
        name : "Vikas",
        address : "Delhi",
        education : "MBA",
    }
    return <ContextData.Provider value={{data,data1}}>
        {children}
    </ContextData.Provider>
}

