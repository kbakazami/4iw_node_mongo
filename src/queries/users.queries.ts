import { UserForm } from '../interfaces';

import { User } from '../database/models/user.model';

export const createUser = async (user: UserForm) => {
    try {
        // @ts-ignore
        const hashedPassword = await User.hashPassword(user.password);
        const newUser = new User({
            username: user.username,
            local: {
                email: user.email,
                password: hashedPassword,
            },
        });
        return newUser.save();
    } catch (e) {
        throw e;
    }
};

export const findUserPerEmail = (email: string) => {
    return User.findOne({ 'local.email': email }).exec();
};

export const findUserPerId = (id: string) => {
    return User.findById(id).exec();
};

export const findUserPerUsername = (username: string) => {
    return User.findOne({ username }).exec();
};

export const searchUsersPerUsername = (search: string) => {
    const regExp = `^${search}`;
    const reg = new RegExp(regExp);
    return User.find({ username: { $regex: reg } }).exec();
};
