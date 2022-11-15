import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    age: Number,
    weight: Number,
    height: Number,
    emailAddress: String,
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;