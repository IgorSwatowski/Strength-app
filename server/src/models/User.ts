import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    age: String,
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});


UserSchema.pre("save", async function(next){
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

const UserModel = mongoose.model('User', UserSchema);


export default UserModel;