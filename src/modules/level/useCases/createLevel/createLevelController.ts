import { CreateLevel } from './createLevel'
import { Request, Response } from 'express'
//Controller

export class CreateLevelController {
    private useCase: CreateLevel;

    constructor(createLevel: CreateLevel) {
        this.useCase = createLevel;
    }

    public async execute(req: Request, res: Response) {

        // req.body = {
        //     number:"1"
        //     name:"Imiter"
        // }

        //On récupère le body
        const { number, name } = req.body

        //TODO DTO
        //Si le body est pas valide, on renvoie une 400
        if (!number) {
            return res.status(400).json({
                error: {
                    message: 'Number is required'
                }
            });
        }

        if (!name) {
            return res.status(400).json({
                error: {
                    message: 'Name is required'
                }
            });
        }

        const level = await this.useCase.execute({ number, name });
        console.log('Controller level result', level);

        return res.status(200).json(level);
    }
}