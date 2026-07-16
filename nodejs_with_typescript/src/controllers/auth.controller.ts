import { Request, Response } from "express";
import { LoginBody } from "../types/auth";

export function loginUser(
  req: Request<{}, {}, LoginBody>,
  res: Response
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  return res.json({
    success: true,
    message: "Login successful",
    email,
  });
}