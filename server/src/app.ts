import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { goalRouter, userRouter } from "./routes";

const app = express();
dotenv.config();
app.use(express.json());
app.use("/user", userRouter);
app.get("/", (req: Request, res: Response) => {
	res.json({ msg: "Hello" });
});

mongoose.connect(process.env.MONGO_URI as string, (err) => {
	if (err) {
		return console.log("DB CONNECTION FAILED");
	}
	app.listen("3000", () => console.log("server running"));
});
