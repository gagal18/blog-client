import {FC} from "react";
import NavLink from "./NavLink";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import {categories} from "../../pages/data-home";

const Navbar: FC = () => {
    return (
        <div className={"flex justify-between items-center"}>
            <Link to={"/"} className={"w-[150px] py-3 font-bold"}>
                <img src={Logo} alt={"logo"}/>
            </Link>
            <div className={"flex items-center gap-[10px]"}>
                {categories.map(c =>
                    <NavLink key={c.slug} title={c.name} to={`/?category=${c.slug}`}/>
                )}
                <NavLink title={"Profile"} to={"profile"}/>
                <Link to={"/blog/create"}>
                   <span className={"cursor-pointer flex shrink-0 grow-0 items-center justify-center rounded-full  h-[30px] w-[70px] transition duration-300 text-white bg-teal-500 border-2 border-teal-500 hover:text-teal-500 hover:bg-white"}>
                       WRITE
                   </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
