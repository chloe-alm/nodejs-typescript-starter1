import { CreateProgress } from './createProgress'
import { Request, Response } from 'express'
//Controller

export class CreateProgressController {
    private useCase: CreateProgress;

    constructor(createProgress: CreateProgress) {
        this.useCase = createProgress;
    }

    public async execute(req: Request, res: Response) {

        // req.body = {
        //     number:"1"
        //     name:"Imiter"
        // }

        //On récupère le body
        const { skill, student, level } = req.body

        //TODO DTO
        //Si le body est pas valide, on renvoie une 400
        if (!skill) {
            return res.status(400).json({
                error: {
                    message: 'skill is required'
                }
            });
        }

        if (!student) {
            return res.status(400).json({
                error: {
                    message: 'student is required'
                }
            });
        }

        if (!level) {
            return res.status(400).json({
                error: {
                    message: 'level is required'
                }
            });
        }

        const Progress = await this.useCase.execute({ skill, level, student });
        console.log('Controller Progress result', Progress);

        return res.status(200).json(Progress);
    }
}