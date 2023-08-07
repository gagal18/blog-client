import {posts} from './data-home'
import {FC} from "react";
import {IPost} from "../interfaces/IPost";
import HomePost from "../components/Posts/HomePost";

const Home:FC = () => {
    return (
        <div className={"py-[50px] flex flex-col gap-[50px]"}>
            {posts.map((post:IPost, index) => {
                return (
                    <HomePost {...post} index={index} key={post.id} />
                )
            })}
        </div>
    )
}

export default Home
