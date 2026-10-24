import { useId, useRef } from "react";

// useId is a React Hook used to generate unique IDs that can be passed to accessibility attributes (like aria-describedby or htmlFor). It ensures that the generated IDs are stable across the server and the client, preventing hydration mismatches in Server-Side Rendering (SSR) applications.

export const UseRefHook = () =>{
    // const finame = useId();
    // const liname = useId();
    // console.log(finame);
    // console.log(liname);

    const iid = useId();

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
                <label htmlFor={iid + "firstName"}>FirstName</label>
                <input type="text" name="firstName" ref={fname} id={iid + "firstName"} placeholder="Enter Your FirstName" />
                <br />
                <label htmlFor={iid + "lastName"}>LastName</label>
                <input type="text" name="lastName" ref={lname} id={iid + "lastName"} placeholder="Enter Your LastName" />
                <br />
                <label htmlFor={iid + "mobile"}>Mobile Number</label>
                <input type="text" id={iid + "mobile"} ref={mobile} name="mobile" />
                <br />
                <label htmlFor={iid + "email"}>Email</label>
                <input type="email" id={iid + "email"} ref={email} name="email" />
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