import {FC} from "react";
import type {RouteObject} from "react-router-dom";
import {useRoutes} from "react-router-dom";
import {Blog, CreateBlog, Home, Login, NoMatch, Register, SingleBlog} from "./pages";
import Layout from "./components/Layout/_layout";

const App: FC = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: "/blog", element: <Blog/>},
                {path: "/blog/create", element: <CreateBlog/>},
                {path: "/blog/:id", element: <SingleBlog/>},
                {path: "/login", element: <Login/>},
                {path: "/register", element: <Register/>},
                {path: "*", element: <NoMatch/>},
            ],
        },
    ];
    const element = useRoutes(routes);
    return (
        <>
            {element}
        </>
    )
}

export default App
