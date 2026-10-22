export const ParentCom = ()=>{
    const data =  {
        name : "Vishv",
        address : "Ahmedabad",
        education : "B.Tech",
    }

    return (
        <>
            <div>This is Parent Compo.</div>
            <ChildCompo data = {data} />
        </>
    )
}

const ChildCompo = ({data})=>{
    return (
        <>
            <div>This is Child Compo.</div>
            <GrandChild data={data} />
        </>
    )
}


const GrandChild = ({data})=>{
    return (
        <>
            <div>This is Grand Child Compo.</div>
            <GreatGrandChildCompo data={data}/>
        </>
    )
}

const GreatGrandChildCompo = ({data})=>{
    return (
        <>
            <div>This is Great Grand Child Compo.</div>
            <p>Name is : {data.name}</p>
            <p>Address is : {data.address}</p>
            <p>Education is : {data.education}</p>
        </>
    )
}