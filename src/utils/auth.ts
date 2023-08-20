import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'test',
}

export const handleSignup = async ({email, password, confirmPassword, name }) => {
    axios.post('//localhost:4000/api/users/register', {
        email,
        password,
        "passwordConfirm": confirmPassword,
        name
        },{
            headers: headers,
            withCredentials: true
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });

};


export const handleLogin = async ({email, password}) => {
    axios.post('//localhost:4000/api/users/login', {
        email,
        password
    },{
            headers: headers,
            withCredentials: true
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

};


export const handleCurrentUser = async () => {
    await axios.get('//localhost:4000/api/users/me',{
        headers: headers,
        withCredentials: true
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
