import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    local: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }
});

userSchema.statics.hashPassword = (password: string) => {
    return bcrypt.hash(password, 12);
};

userSchema.methods.comparePassword = (
    password: string,
    hashedPassword: string
) => {
    return bcrypt.compare(password, hashedPassword);
};

export const User = mongoose.model('user', userSchema);