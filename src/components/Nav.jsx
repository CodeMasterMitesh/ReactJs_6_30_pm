import "./Nav.css";
import { Button } from "./Button";
import { Profile } from "./Profile";

export const Nav = () => {
    const name = "Kishan Kaniya";
    const userName = "Kishan@007";
    const mobile = 9876543210;
    const login = true;
    // const name = "Vikas";

      const loginBtnStyle = { 
        display: "inline-block", 
        width: "100px", 
        padding: "8px", 
        border: "none", 
        textAlign: "center", 
        borderRadius: "5px", 
        backgroundColor: "orange", 
        color: "black" 
    };

    return (
        <div className="nav">
            <div className="logo">LoGo</div>
            <ul>
                <NavLink url="https://www.facebook.com" name="Home" />
                <NavLink url="https://www.instagram.com" name="About" />
                <NavLink url="https://www.linkdin.com" name="Service" />
                <NavLink url="#" name="Contact" />
            </ul>
            <div className="login">
                {/* {login == true ? <a href="">Logout</a> : <a href="">Login</a>} 
               {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}  */}

                <Button style={loginBtnStyle} name={login == true ? "Logout" : "Login"} />

                {/* <a href="">{login == true ? "Logout" : "Login"}</a>  */}
                {/* {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}   */}
                <Profile name={name} data={
                    <>
                        <p>Mobile : {mobile}</p>
                        <p>userName : {userName}</p>
                    </>

                } >
                    <address>
                        <p>City : Vrindavan</p>
                        <p>State : UP</p>
                        <p>Country : India</p>
                    </address>
                </Profile>
            </div>
        </div>
    )
}


const NavLink = (props) => {
    // console.log(props);
    return (
        <li><a href={props.url}>{props.name}</a></li>
    )
}