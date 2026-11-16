import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const AppLayout = ()=>{
    return (
        <>
            <NavBar/>
                <Outlet/>
            <Footer/>
        </>
    )
}