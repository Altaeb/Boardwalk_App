import { getSingleUserByEmail, addNewUser, getSingleUserByUserId } from './users';

const returnError = (msg) => ({
    code: "11221",
    message: msg
})

const login = ({ email, password }) => {
    const user = getSingleUserByEmail(email.toLowerCase());
    return user && user.password === password ? { id: user.id } : returnError("Login Failed");
}

const signUp = ({ firstName, lastName, email, password }) => {
    if (!email) {
        return returnError("Please enter an email");
    }

    if (!firstName) {
        return returnError("First Name is not provided");
    }

    if (!lastName) {
        return returnError("Last Name is not provided");
    }

    if (!password) {
        return returnError("Password is not provided");
    }


    if (getSingleUserByEmail(email) != undefined) {
        return returnError("email already exist");

    }
    return addNewUser({ firstName, lastName, email, password });

}

const getUserProfile = ({ userId }) => getSingleUserByUserId(userId);

export { login, signUp, getUserProfile };