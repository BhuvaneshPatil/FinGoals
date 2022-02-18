import { model, Schema } from "mongoose";
const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
	},
	imageURL: {
		type: String,
	},
});

const UserModel = model("User", userSchema);
export default UserModel;
