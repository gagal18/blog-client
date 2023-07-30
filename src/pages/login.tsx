import Form from "../components/Auth/Form";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"flex flex-col items-center"}>
            <h1 className={"text-3xl font-semibold"}>Log in</h1>
            <Form type={"login"}>
                <div className="mt-4 text-center text-gray-600">
                    If not registered,{" "}please{" "}
                    <Link to="/register" className="text-blue-500 underline">
                         register
                    </Link>
                    .
                </div>
            </Form>
        </div>
    )
}

export default Login
