import { useParams } from 'react-router-dom';
import {posts} from "./data-home";
import {IPost} from "../interfaces/IPost";
import RecommendedPost from "../components/Posts/RecommendedPost";
import MainPost from "../components/Posts/MainPost";

const SingleBlog = () => {
    const params = useParams();
    const id = params.id;
    const post = posts.find(p => p.id == id)
    const postsRecommended = posts.filter((p) => p.id != id);


    return (
        <div className={"w-full flex gap-[50px] py-[50px]"}>
            <div className={"w-2/3"}>
                <MainPost {...post} />
            </div>
            <div className={"w-1/3 flex flex-col gap-[80px]"}>
                <h2 className={"text-teal-500 transition text-3xl font-semibold"}>Other posts you may like</h2>
                {postsRecommended.map((post:IPost) => {
                    return (
                        <RecommendedPost {...post} key={post.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default SingleBlog
