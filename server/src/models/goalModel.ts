import { Schema, model } from "mongoose";
import { Goal } from "../types";
const { ObjectId } = Schema.Types;
const goalSchema = new Schema<Goal>(
	{
		title: {
			type: String,
			trim: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		completionDate: {
			type: Date,
		},
		user: {
			type: ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);
const GoalModel = model("Goal", goalSchema);

export default GoalModel;
