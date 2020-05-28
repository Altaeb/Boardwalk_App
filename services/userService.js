import { login, signUp, getUserProfile } from '../repositories/userRepository';

const userLogin = ({ email, password }) => login({ email, password });

const userSignUp = ({ firstName, lastName, email, password }) => (
    signUp({ firstName, lastName, email, password })
)

const userProfile = ({ userId }) => getUserProfile({ userId });

export { userLogin, userSignUp, userProfile }