import { ProgressRepo } from "../../progressRepo";

export class CreateProgress {
  private progresseRepo: ProgressRepo;

  constructor(progressRepo: ProgressRepo) {
    this.progressRepo = progressRepo;
  }

  public async createProgress(userId: any, skillId: any) {
    const createProgress = await this.progresseRepo.createProgress(
      userId,
      skillId
    );

    console.log("CREATE PROGRESS SERVICE", createProgress);
    return createProgress;
  }
}