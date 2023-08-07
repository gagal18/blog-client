export interface IPost {
    id: number;
    title: string;
    desc: string;
    img: string;
}
export interface IHomePost extends IPost{
    index: number
}

export type IRecommendPost = Omit<IPost, "desc">;
