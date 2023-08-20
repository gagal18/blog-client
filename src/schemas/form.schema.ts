import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email address'),
    password: yup.string().required('Password is required').min(3, 'Password must be at least 3 characters'),
});


export const registerValidationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email address'),
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    password: yup.string().required('Password is required').min(3, 'Password must be at least 3 characters'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
