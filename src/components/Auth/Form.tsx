import { FC, useState } from 'react';
import {FormProps} from "../../interfaces/IForm";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {loginValidationSchema, registerValidationSchema} from "../../schemas/form.schema";
import {handleLogin, handleSignup} from "../../utils/auth";
import { useNavigate } from 'react-router-dom';
import {IRegister} from "../../interfaces/IAuth";



const Form: FC<FormProps> = ({type, children}) => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(type == "login" ? loginValidationSchema : registerValidationSchema)
    });
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const navigate = useNavigate()



    const onSubmit = async (data: IRegister) => {
        setLoading(true)
        if (type === 'login') {
            await handleLogin(data).then(() => {
                setSuccess(true)
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }).catch(err => {
                setError(err)
                setTimeout(() => {
                    setError(null)
                }, 3000);
            })
        } else {
            await handleSignup(data).then(() => {
                setSuccess(true)
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }).catch(err => {
                setError(err)
                setTimeout(() => {
                    setError(null)
                }, 3000);
            })
        }
        setLoading(false)
    };
    return (
        <div className="max-w-md w-full space-y-8 mx-auto">
            {loading && <p className={"text-center"}>PLEASE WAIT</p>}
            {success && <p className={"text-center"}>Succesfully register<br/>You are being redirected</p>}
            {error && <p className={"text-center"}>There is an error<br/>{error?.response.data.message}</p>}
            <form onSubmit={() => handleSubmit(onSubmit)} className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${success ? "shadow-teal-500" : null} ${error ? "shadow-red-500" : null}`}>
                {type !== "login" &&
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register("name")}
                            type="name"
                            id="name"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className={"underline text-red-500"}>{errors.name?.message}</p>}
                    </div>
                }
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className={"underline text-red-500"}>{errors.email?.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        {...register("password")}
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className={"underline text-red-500"}>{errors.password?.message}</p>}
                </div>
                {type !== "login" &&
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter password confirmation"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <p className={"underline text-red-500"}>{errors.confirmPassword?.message}</p>}
                    </div>
                }
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {type}
                    </button>
                </div>
            </form>
            {children}

        </div>
    );
};

export default Form;
