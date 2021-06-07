import { GetProgress } from "./getProgress";
import { Request, Response } from "express";

export class GetProgressController {
  private useCase: GetProgress;

  constructor(getProgress: GetProgress) {
    this.useCase = getProgress;
  }

  public async execute(_: Request, response: Response) {
    const getProgress= await this.useCase.getProgress();
    response.status(200).json(getProgress);
  }
}