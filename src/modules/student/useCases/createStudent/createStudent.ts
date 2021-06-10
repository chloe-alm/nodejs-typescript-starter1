//UseCase -> Service -> de la logique
import { StudentRepo } from "../../studentRepo";
import { studentProps } from '../../studentTypes'

export class CreateStudent {
    private studentRepo: StudentRepo;

    constructor(StudentRepo: StudentRepo) {
        this.studentRepo = StudentRepo
    }

    public async execute(props: studentProps) {
        return await this.studentRepo.create(props);
    }
}