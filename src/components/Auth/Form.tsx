import { FC, useState } from 'react';
import {FormProps} from "../../interfaces/IForm";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const Form: FC<FormProps> = ({type, children}) => {
    const validationSchema = yup.object().shape({
        email: yup.string().required('Email is required').email('Invalid email address'),
        password: yup.string().required('Password is required').min(3, 'Password must be at least 3 characters'),
    });

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)

    });
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');



    const handleSignup = async (data) => {
        console.log(data)
        try {
            console.log(data.email, data.password); // Data object contains form field values
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="max-w-md w-full space-y-8 mx-auto">
            <form onSubmit={handleSubmit(handleSignup)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
