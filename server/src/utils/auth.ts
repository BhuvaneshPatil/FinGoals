import jwt from "jsonwebtoken";
export const generateAccessToken = (id: string): string => {
	return jwt.sign(id, process.env.SALT as string, { expiresIn: 60 * 60 });
};
