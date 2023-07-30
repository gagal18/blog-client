import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className={"min-h-[100vh] max-w-[1360px] mx-auto flex flex-col justify-between"}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout
