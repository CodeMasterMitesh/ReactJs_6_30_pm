// import "./Nav.css";
import style from './Nav.module.css'
import { Button } from "./Button";
import { Profile } from "./Profile";
import styled from 'styled-components';
// import styled from 'styled-components';
// console.log(style);
//  const Address = styled.address`
//     display:"inline-block";
//     background-color : "orange";
//     border : "1px solid black";
//     padding : "5px";
// `;

 const AddressTag = styled.address(
    {
        display:"inline-block",
        backgroundColor : "orange",
        border : "1px solid black",
        padding : "5px",
    }
 )
export const Nav = () => {
    const name = "Kishan Kaniya";
    const userName = "Kishan@007";
    const mobile = 9876543210;
    const login = false;
    // const name = "Vikas";

      const loginBtnStyle = { 
        display: "inline-block", 
        width: "100px", 
        padding: "8px", 
        border: "none", 
        textAlign: "center", 
        borderRadius: "5px", 
        // backgroundColor: `${login == true ? "orange" : "green"}`, 
        color: "black" 
    };

    return (
        <div className={style.nav}>
            <div className={style.logo}>LoGo</div>
            <ul>
                <NavLink url="https://www.facebook.com" name="Home" />
                <NavLink url="https://www.instagram.com" name="About" />
                <NavLink url="https://www.linkdin.com" name="Service" />
                <NavLink url="#" name="Contact" />
            </ul>
            <div className={style.login}>
                {/* {login == true ? <a href="">Logout</a> : <a href="">Login</a>} 
               {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}  */}

                <Button style={loginBtnStyle} bgcolor={login == true ? style['login-bg-color'] : style['logout-bg-color']} name={login == true ? "Logout" : "Login"} />

                {/* <a href="">{login == true ? "Logout" : "Login"}</a>  */}
                {/* {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}   */}
                <Profile name={name} data={
                    <>
                        <p>Mobile : {mobile}</p>
                        <p>userName : {userName}</p>
                    </>

                } >
                    <AddressTag>
                        <p>City : Vrindavan</p>
                        <p>State : UP</p>
                        <p>Country : India</p>
                    </AddressTag>
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