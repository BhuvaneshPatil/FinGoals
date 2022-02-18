import { ObjectId, Types } from "mongoose";
export interface Transaction {
	note: string;
	user: ObjectId;
	goal: ObjectId;
	amount: number;
}
