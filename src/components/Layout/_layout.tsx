import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {FC} from "react";

const Layout:FC = () => {
    return (
        <>
            <div className={"max-w-[1360px] mx-auto flex flex-col justify-between"}>
                <Navbar/>
                <Outlet/>
            </div>
            <Footer/>
        </>
)
}

export default Layout
