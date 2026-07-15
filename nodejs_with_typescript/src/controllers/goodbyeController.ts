import { Response } from "express";
import { GoodbyeRequest } from "../types/goodbye";

export function sayGoodbye(req: GoodbyeRequest, res: Response) {
  const { name } = req.query;

  if (typeof name !== "string") {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  return res.json({
    farewell: `Goodbye, ${name}`,
  });
}