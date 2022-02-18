import { Schema, model } from "mongoose";
import { Transaction } from "../types";
const { ObjectId } = Schema.Types;
const transactionSchema = new Schema<Transaction>(
	{
		note: {
			type: String,
			trim: true,
		},
		amount: {
			type: Number,
		},
		user: {
			type: ObjectId,
			ref: "User",
		},
		goal: {
			type: ObjectId,
			ref: "Goal",
		},
	},
	{ timestamps: true }
);

const TransactionModel = model("Transaction", transactionSchema);

export default TransactionModel;
