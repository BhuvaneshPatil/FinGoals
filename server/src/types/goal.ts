import { Date, ObjectId } from "mongoose";
export interface Goal {
	title: string;
	amount: number;
	completionDate: Date;
	user: ObjectId;
	currentAmount: number;
}
