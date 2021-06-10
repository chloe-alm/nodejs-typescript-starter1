import { CreateStudent } from './createStudent'
import { Request, Response } from 'express'
//Controller

export class CreateStudentController {
    private useCase: CreateStudent;

    constructor(createStudent: CreateStudent) {
        this.useCase = createStudent;
    }

    public async execute(req: Request, res: Response) {

        // req.body = {
        //     number:"1"
        //     name:"Imiter"
        // }

        //On récupère le body
        const { firstname, lastname } = req.body

        //TODO DTO
        //Si le body est pas valide, on renvoie une 400
        if (!firstname) {
            return res.status(400).json({
                error: {
                    message: 'firstname is required'
                }
            });
        }

        if (!lastname) {
            return res.status(400).json({
                error: {
                    message: 'lastname is required'
                }
            });
        }

        const student = await this.useCase.execute({ firstname, lastname });
        console.log('Controller student result', student);

        return res.status(200).json(student);
    }
}