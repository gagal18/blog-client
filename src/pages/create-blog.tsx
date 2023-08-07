import ReactQuill from 'react-quill';
import {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import {categories} from "./data-home";
import NavLink from "../components/Layout/NavLink";

const CreateBlog = () => {
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    return (
        <div className={"w-full flex gap-[50px] py-[50px]"}>
            <div className={"w-2/3 flex flex-col gap-[30px]"}>
                <input placeholder={"Title..."} className={"block w-full border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"} value={title} onChange={(e) => setTitle(e.target.value)} />
                <ReactQuill theme="snow" value={description} onChange={setDescription} />
            </div>
            <div className={"w-1/3 flex flex-col gap-[30px]"}>
                <div className={"border-0 ring-1 ring-inset ring-gray-300 p-[10px] flex flex-col gap-[10px]"}>
                    <h4 className={"text-xl text-gray-500 font-semibold mb-[15px]"}>Publish</h4>
                    <div className={"flex gap-[5px]"}>
                        <span className={"text-gray-500 font-semibold"}>Status:</span>
                        <span className={"text-gray-500"}>Draft</span>
                    </div>
                    <div className={"flex gap-[5px]"}>
                        <span className={"text-gray-500 font-semibold"}>Visibility:</span>
                        <span className={"text-gray-500"}>Public</span>
                    </div>
                    <div>
                        <label>
                            <span className={"underline text-gray-500 cursor-pointer"}>Upload image</span>
                            <input className={"hidden"} type={"file"}/>
                        </label>
                    </div>
                    <div className={"flex justify-between"}>
                        <button className={"px-2 py-1 border-teal-500 border-2 text-teal-500"}>
                            Save as a draft
                        </button>
                        <button className={"px-2 py-1 bg-teal-500 text-white"}>
                            Update
                        </button>
                    </div>
                </div>
                <div className={"border-0 ring-1 ring-inset ring-gray-300 p-[10px] flex flex-col gap-[10px]"}>
                    <h4 className={"text-xl text-gray-500 font-semibold mb-[15px]"}>Category</h4>
                    <div className={"flex flex-col gap-[5px]"}>
                        {categories.map(c =>
                            <label key={c.slug} className={"cursor-pointer flex items-center gap-[2px]"}>
                                <input type={"checkbox"} value={c.slug}/>
                                <span className={"text-teal-500"}>{c.name}</span>
                            </label>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
