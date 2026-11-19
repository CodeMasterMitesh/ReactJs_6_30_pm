import axios from "axios";
import { useEffect, useState } from "react";

export const AxiosExm = ()=>{
    const [apiData,setApiData] = useState([]);
    const apiurl = `https://jsonplaceholder.typicode.com/posts`;

    const getApiData = async() => {
        try{
            const data = await axios.get(apiurl);
            // console.log(data.data);
            setApiData(data.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getApiData(); 
    },[])

    console.log(apiData);
    return (
        <>
            <h1>This is Axio Example Page</h1>
        </>
    )
}