import { ProgressRepo } from "../../progressRepo";

export class GetProgress {
  private progressRepo: ProgressRepo;

  constructor(progressRepo: ProgressRepo) {
    this.progressRepo = progressRepo;
  }

  public async getProgress() {
    const getProgress = await this.progressRepo.getProgress();
    return getProgress;
  }
}