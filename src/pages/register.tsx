import Form from "../components/Auth/Form";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className={"flex flex-col gap-[15px] items-center justify-center h-[700px]"}>
            <h1 className={"text-3xl font-semibold"}>Register</h1>
            <Form type={"register"}>
                <div className="mt-4 text-center text-gray-600">
                    If you Already have account,{" "}please{" "}
                    <Link to="/login" className="text-blue-500 underline">
                        login
                    </Link>
                    .
                </div>
            </Form>
        </div>
    )
}

export default Register
