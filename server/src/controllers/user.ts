import { default as bcrypt } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models";
import { User } from "../types";

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Send user as req.body = {user:{...}}
	let { user }: { user: User } = req.body;
	// find if user exist with email
	const existingUser = await UserModel.findOne({ email: user?.email });
	// send err msg if user does not exist
	if (existingUser) {
		res.status(400).json({ msg: "User with this email already exists" });
	}
	// hash password
	let temp_hash = bcrypt.hashSync(user?.password, 10);

	user = { ...user, password: temp_hash };
	// create user and send it
	const newUser = await UserModel.create(user);
	// TODO - creating JWT token
	res.status(201).json(newUser);
};

export const loginUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {};
