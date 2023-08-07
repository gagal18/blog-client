import {FC} from "react";
import {INavLink} from "../../interfaces/INavbar";
import {Link} from "react-router-dom";

const NavLink:FC<INavLink> = ({title, to}) => {
    return (
        <Link to={to} className={"px-2 text-teal-500 border-b-2 border-white hover:border-teal-500 transition"}>
            {title}
        </Link>
    )
}

export default NavLink
