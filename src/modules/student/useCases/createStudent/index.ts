import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import { CreateStudent } from './createStudent'
import { CreateStudentController } from './createStudentController'


//Je construit mon repo avec les entités dont j'ai besoin
const studentRepo = new StudentRepo(entitiesObject)
const createStudent = new CreateStudent(studentRepo)
const createStudentController = new CreateStudentController(createStudent)

export { createStudent, createStudentController }