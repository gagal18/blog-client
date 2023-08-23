import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'test',
}


export const handleSignup = async ({ email, password, confirmPassword, name }) => {
    await axios.post('//localhost:4000/api/auth/register', {
            email,
            password,
            passwordConfirm: confirmPassword,
            name
        }, {
            headers: headers,
            withCredentials: true
        }).then(res => {
            console.log(res)
            return res

    }).catch(err => {
            throw err;
        })
};

export const handleLogin = async ({email, password}) => {
    await axios.post('//localhost:4000/api/auth/login', {
        email,
        password
    },{
        headers: headers,
        withCredentials: true
    }).then(res => res).catch(err => {
        throw err;
    })

};


export const handleCurrentUser = async () => {
    await axios.get('//localhost:4000/api/users/me',{
        headers: headers,
        withCredentials: true
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        });
};
