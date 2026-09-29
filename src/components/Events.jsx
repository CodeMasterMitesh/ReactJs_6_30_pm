export const Events = ()=>{
    const btnCss = {
        width:"150px",
        padding:"10px",
        backgroundColor:"royalblue",
        color:"white",
        borderRadius:"8px",
        border:"none"
    }

    const grandParent = {
        width:"100%",
        padding:"30px",
        backgroundColor:"orange",
        color:"white",
    }

    const parent = {
        width:"90%",
        padding:"20px",
        backgroundColor:"black",
        color:"white",
    }
    // const myFunction = (e)=>{
    //     console.log("This is Click Event.");
    //     console.log(e);
    // }

    // function myFunction(e){
    //     console.log("This is Click Event.");
    //     console.log(e);
    // }

    function myFunction(e,p){
        // e.stopPropagation();
        // console.log("This is Click Event.");
        // console.log(e);
        // console.log(p);
        alert("This is Click Event.")
    }

    const parentClickEvent = (e)=>{
        // e.stopPropagation();
        alert("Parent Event Fire");
    }

    const grandParentClickEvent = (e)=>{
        // e.stopPropagation();
        alert("grandParent Event Fire");
    }
    return(
        <>
            <div onClickCapture={grandParentClickEvent} style={grandParent}>
                <div onClickCapture={parentClickEvent} style={parent}>
                    <button style={btnCss} onClickCapture={(e)=> myFunction(e,"Mitesh")}>Click</button>
                </div>
            </div>
           {/* <button style={btnCss} onClick={(e)=> console.log("Click Event Fire.",e)}>Click</button> */}
           {/* <button style={btnCss} onClick={myFunction}>Click</button> */}
        </>
    )
}