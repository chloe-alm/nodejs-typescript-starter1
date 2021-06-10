//UseCase -> Service -> de la logique
import { ProgressRepo } from "../../progressRepo";
import { progressProps } from '../../progressTypes'

export class CreateProgress {
    private progressRepo: ProgressRepo;
    private levelRepo: any;
    private studentRepo: any;
    private skillRepo: any;

    constructor(progressRepo: ProgressRepo, skillRepo: any, levelRepo: any, studentRepo: any) {
        this.progressRepo = progressRepo
        this.levelRepo = levelRepo
        this.skillRepo = skillRepo
        this.studentRepo = studentRepo
    }

    public async execute(props: progressProps) {

        const foundSkill = await this.skillRepo.getSkillById(props.skill)
        const foundStudent = await this.studentRepo.getStudentById(props.student)
        const foundLevel = await this.levelRepo.getLevelById(props.level)

        console.log('found skill : ', foundSkill)
        console.log('found student : ', foundStudent)
        console.log('found level : ', foundLevel)

        const progressProps = {
            skill: foundSkill,
            student: foundStudent,
            level: foundLevel,
        }

        return await this.progressRepo.create(progressProps);
    }
}