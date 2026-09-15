import "./Nav.css";
import { Button } from "./Button";

export const Nav = () =>{

    const login = true;
    const name = "Vikas";

    return (
        <div className="nav">
            <div className="logo">LoGo</div>
            <ul>
                <NavLink url="https://www.facebook.com" name="Home"/>
                <NavLink url="https://www.instagram.com" name="About" />
                <NavLink url="https://www.linkdin.com" name="Service" />
                <NavLink url="#" name="Contact" />
            </ul>
            <div className="login">
               {/* {login == true ? <a href="">Logout</a> : <a href="">Login</a>} 
               {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}  */}

                <Button name={login == true ? "Logout" : "Login"}/>

                {/* <a href="">{login == true ? "Logout" : "Login"}</a>  */}
               {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}  

            </div>
        </div>
    )
}


const NavLink = (props)=>{
    console.log(props);
    return (
        <li><a href={props.url}>{props.name}</a></li>
    )
}