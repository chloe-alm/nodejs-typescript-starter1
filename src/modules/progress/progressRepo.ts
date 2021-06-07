export class ProgressRepo {
    private entities: any;
  
    constructor(entities: any) {
      this.entities = entities;
    }
  
    public async createProgress(userId: any, skillId: any) {
      const ProgressEntity = this.entities.Progress;
      const UserEntity = this.entities.User;
      const SkillEntity = this.entities.Skill;
      const LevelEntity = this.entities.Level;
  
      const findUser = await UserEntity.findOne({ where: { id: userId } });
      const findSkill = await SkillEntity.findOne({ where: { id: skillId } });
      const findLevel = await LevelEntity.findOne({ where: { id: 1 } });
  
      const createProgress = await ProgressEntity.create({
        user: findUser,
        skill: findSkill,
        level: findLevel,
      }).save();
  
      const progress = await ProgressEntity.findOne(createProgress.id, {
        relations: ["user", "level", "skill"],
      });
  
      return progress;
    }
  
    public async getProgress() {
      const ProgressEntity = this.entities.Progress;
  
      const findProgress = await ProgressEntity.find({
        relations: ["user", "level", "skill"],
      });
      return findProgress;
    }
  
    public async getProgresseById(id: any) {
      const ProgressEntity = this.entities.Progress;
      const findProgressById = await ProgressEntity.find({ where: { id } });
      return findProgressById;
    }
  
    public async editProgress(data: any, id: any) {
      const ProgressEntity = this.entities.Progress;
      const checkProgress = await ProgressEntity.findOne({ where: { id } });
      if (checkProgress) {
        const result = await ProgressEntity.merge(checkProgress, data).save();
        return result;
      }
    }
    public async deleteProgresse(id: any) {
      const ProgressEntity = this.entities.Progress;
      const deleteProgress = await ProgressEntity.delete(id);
      return deleteProgress;
    }
  }
  