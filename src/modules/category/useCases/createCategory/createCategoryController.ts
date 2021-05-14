import { CreateCategory } from './createCategory'
import { Request, Response } from 'express'
//Controller

export class CreateCategoryController {
    private useCase: CreateCategory;

    constructor(createCategory: CreateCategory) {
        this.useCase = createCategory;
    }

    public async execute(req: Request, res: Response) {

        // req.body = {
        //     name:"Activity type 1"
        // }

        //On récupère le body
        const { name, description } = req.body

        //Si le body est pas valide, on renvoie une 400
        if (!name) {
            return res.status(400).json({
                error: {
                    message: 'Name is required'
                }
            });
        }

        if (!description) {
            return res.status(400).json({
                error: {
                    message: 'Description is required'
                }
            });
        }


        const categories = await this.useCase.createCategories({ name, description });
        console.log('Controller categories result', categories);

        res.status(200).json(categories);
    }
}