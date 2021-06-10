import { studentProps } from './studentTypes'

export class StudentRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill //Level
        this.entities = entities
    }

    public async create(studentProps: studentProps) {
        const StudentEntity = this.entities.Student

        return await StudentEntity.create({ firstname: studentProps.firstname, lastname: studentProps.lastname }).save()
    }

    public async getStudentById(studentId: number) {
        const StudentEntity = this.entities.Student

        return await StudentEntity.findOne(studentId)
    }
}