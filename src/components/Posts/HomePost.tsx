import {FC} from "react";
import {IHomePost} from "../../interfaces/IPost";
import {Link} from "react-router-dom";

const HomePost:FC<IHomePost> = ({id, img, title, desc,index }) => {
    return (
        <div className={`h-[550px] flex gap-[50px] justify-between items-center ${index % 2 !== 0 ? "flex-row-reverse" : null}`}>
            <div className={"flex relative h-full w-1/3"}>
                <img className={"h-full object-contain"} src={img} alt={title} />
            </div>
            <div className={"w-2/3 h-full flex flex-col py-[100px] gap-[80px]"}>
                <h2 className={"cursor-pointer w-max px-2 text-teal-500 border-b-2 border-white hover:border-teal-500 transition text-2xl font-semibold"}>{title}</h2>
                <div className={"h-full flex flex-col gap-[30px]"}>
                    <p>{desc}</p>
                    <Link to={`/blog/${id}`}>
                        <span className={"hover:scale-110 cursor-pointer flex gap-[5px] shrink-0 grow-0 items-center items-center justify-center rounded-full px-[10px] py-[2px] w-max transition duration-300 text-white bg-teal-500 border-2 border-teal-500 hover:text-teal-500 hover:bg-white"}>
                            read more<span>&rarr;</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default HomePost
