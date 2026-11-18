import { useLoaderData } from "react-router"

export const News = ()=>{
    const data = useLoaderData();
    console.log("News Data",data);
    return (
        <>
            <h1>Latest All News</h1>
            <ul>
                {
                    data.map((curEle)=>{
                        return (
                            <li key={curEle.id}>{curEle.title}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}