import {FC} from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer: FC = () => {
    return (
        <div className={""}>
            <div className={"max-w-[1360px] mx-auto flex justify-between items-center"}>
                <Link to={"/"} className={"w-[150px] py-3 font-bold"}>
                    <img src={Logo} alt={"logo"} />
                </Link>
                {/*RENDER FROM REGISTRED CATEGORIES IN API*/}
                <span>
                Made with<span className={"text-teal-500"}> ♥️ </span>and <b className={"text-teal-500"}>React.js</b>.
            </span>
            </div>
        </div>
    )
}

export default Footer
