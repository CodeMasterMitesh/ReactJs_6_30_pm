export const GetApiData = ()=>{
    const apiurl = `https://jsonplaceholder.typicode.com/posts`;

    const getNewsData = async()=>{
        const res = await fetch(apiurl);
        // console.log(res);
        const data = await res.json();
        console.log(data);
        return data;
        // setNewsData(data);
    }
    return getNewsData();
    // console.log(newsData);
}