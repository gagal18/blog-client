import {FC} from "react";
import {IPost} from "../../interfaces/IPost";
import avatar from '../../assets/avatar.png'
import {AiFillDelete, AiFillEdit} from "react-icons/ai";

const MainPost:FC<IPost> = ({img, title, desc }) => {
    return (
        <div className={`flex flex-col gap-[20px] justify-between items-start`}>
            <div className={"flex relative w-full h-[400px]"}>
                <img className={"w-full object-cover"} src={img} alt={title} />
            </div>
            <div className={"flex gap-[10px]"}>
                <img className={"w-[50px] h-[50px] rounded-full"} src={avatar} alt={"User"}/>
                <div className={"flex flex-col justify-between"}>
                    <span className={"font-bold"}>Name</span>
                    <span className={"text-sm"}>2 days ago</span>
                </div>
                <span className={"flex items-center cursor-pointer text-green-700"}>
                    <AiFillEdit />
                </span>
                <span className={"flex items-center cursor-pointer text-red-700"}>
                    <AiFillDelete />
                </span>
            </div>
            <h2 className={"text-teal-500 text-5xl font-bold"}>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}


export default MainPost
