import { CreateProgress } from "./createProgress";
import { Request, Response } from "express";

export class CreateProgressController {
  private useCase: CreateProgress;

  constructor(createProgress: CreateProgress) {
    this.useCase = createProgress;
  }

  public async execute(request: Request, response: Response) {
    const { userId, skillId } = request.body;
    const createProgress = await this.useCase.createProgress(userId, skillId);
    response.status(200).json(createProgress);
  }
}