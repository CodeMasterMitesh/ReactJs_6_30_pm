export const Profile = ({name,data,children})=>{
    // console.log(props)
    // const name = props.name;
    // const userName = "Kishan@001";
    // const mobile = 9876543210;
    // const address = "Vrindavan,UP,Gujarat"; 
    // const {name,data,children} = props;

    return (
        <>
            <h1>Name : {name}</h1>
            {data}
            {/* <p>UserName : {userName}</p>
            <p>Mobile : {mobile}</p> */}
            <div>
                {/* address : {address} */}
                {children}
            </div>
        </>
    )
}