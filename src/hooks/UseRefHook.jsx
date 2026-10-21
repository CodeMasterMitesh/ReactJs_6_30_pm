import { useRef } from "react";

export const UseRefHook = () =>{
    // const fname = document.getElementById("firstName").value;
    // const lname = document.getElementById("lastName").value;
    // const mobile = document.getElementById("mobile").value;
    // const email = document.getElementById("email").value;
    const fname = useRef(null);
    const lname = useRef(null);
    const mobile = useRef(null);
    const email = useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(fname.current.value);
        console.log(lname.current.value);
        console.log(mobile.current.value);
        console.log(email.current.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">FirstName</label>
                <input type="text" name="firstName" ref={fname} id="firstName" placeholder="Enter Your FirstName" />
                <br />
                <label htmlFor="">LastName</label>
                <input type="text" name="lastName" ref={lname} id="lastName" placeholder="Enter Your LastName" />
                <br />
                <label htmlFor="">Mobile Number</label>
                <input type="text" id="mobile" ref={mobile} name="mobile" />
                <br />
                <label htmlFor="">Email</label>
                <input type="email" id="email" ref={email} name="email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* <div>
                <p>Name : {fname.current.value}</p>
                <p>Last Name : {lname.current.value}</p>
                <p>Mobile : {mobile.current.value}</p>
                <p>Email : {email.current.value}</p>
            </div> */}
        </>
    )
}