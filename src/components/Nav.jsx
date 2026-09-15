import "./Nav.css";

export const Nav = () =>{

    const login = false;
    const name = "Vikas";

    return (
        <div className="nav">
            <div className="logo">LoGo</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="login">
               {/* {login == true ? <a href="">Logout</a> : <a href="">Login</a>} 
               {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}  */}

                <a href="">{login == true ? "Logout" : "Login"}</a> 
               {login == true ? <h2>{name} : <span>Logged</span></h2> : ""}  

            </div>
        </div>
    )
}