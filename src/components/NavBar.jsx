import { Link, NavLink } from "react-router";
import style from "./NavBar.module.css"
// console.log(style.active);
export const NavBar = () => {
   
    return (
        <div className={style.menu}>
            <div className={style.logo}>
                Logo
            </div>
            <div className={style.nav}>
                <ul>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/about" >About</NavLink> </li>
                    <li> <NavLink to="/contact">Contact</NavLink> </li>
                </ul>
            </div>
        </div>
    )
}