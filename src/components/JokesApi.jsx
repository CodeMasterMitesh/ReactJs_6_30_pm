import { useEffect, useState } from "react";

export const JokesApi = () => {
    const [jokesData,setJokesData] = useState([]);
    const url = "https://official-joke-api.appspot.com/jokes/random/25";
    // console.log(url);
    // fetch(url).then((res) => {
    //     return res.json();
    //     // console.log(res.json());
    // }).then((data) => {
    //     console.log("data: ",data);
    // }).catch((error) => {
    //         // console.log(error);
    //     });

    const fetchApiData = async() =>{
        const res = await fetch(url);
        // console.log(res);
        if(res.status == 200){
            const data = await res.json();
            console.log("data : ",data);
            setJokesData(data);
        }else{
            return "some error";
        }
    } 
    
    console.log("jokesData : ",jokesData);
    useEffect(()=>{
        fetchApiData();
    },[]);


    return (
        <>
            <h1>This is Jokes Api</h1>
            <ul>
                {
                    jokesData.map((curEle)=>{
                        return(
                        <li key={curEle.id}> 
                            {curEle.punchline} - 
                            {curEle.setup}
                        </li>
                        )
                    })
                }
            </ul>
        </>
    )
}