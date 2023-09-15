import { Response, Request, NextFunction } from "express";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const allEmployees = [{
      name: 'Jim',
    }];
    res.json(allEmployees);
  } catch (err) {
    next(err);
  }
}