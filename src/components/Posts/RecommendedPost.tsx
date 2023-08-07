import {FC} from "react";
import {IRecommendPost} from "../../interfaces/IPost";
import {Link} from "react-router-dom";

const RecommendedPost:FC<IRecommendPost> = ({id, img, title }) => {
    return (
        <div className={`flex flex-col gap-[20px] justify-between items-center`}>
            <div className={"flex relative w-full h-[200px]"}>
                <img className={"w-full object-cover"} src={img} alt={title} />
            </div>
            <div className={"w-full h-full flex flex-col gap-[20px]"}>
                <h2 className={"cursor-pointer w-max px-2 text-teal-500 border-b-2 border-white hover:border-teal-500 transition text-2xl font-semibold"}>{title}</h2>
                <div className={"h-full flex flex-col gap-[30px]"}>
                    <Link to={`/blog/${id}`}>
                        <span className={"cursor-pointer flex gap-[5px] shrink-0 grow-0 items-center items-center justify-center rounded-full px-[10px] py-[2px] w-full transition duration-300 text-white bg-teal-500 border-2 border-teal-500 hover:text-teal-500 hover:bg-white"}>
                            read more<span>&rarr;</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default RecommendedPost
