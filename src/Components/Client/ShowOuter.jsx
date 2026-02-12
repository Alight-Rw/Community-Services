import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { NavigationBar } from "./Nav";

export function ShowOuter(){
    return (
        <>
        <div>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
        </>
    )
}