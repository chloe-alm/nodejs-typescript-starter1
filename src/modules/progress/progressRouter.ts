import { Router } from 'express'
import { createProgressController } from './useCases/createProgress/'

const progressRouter: Router = Router();

///api/v1/skills/
progressRouter.post('/', (req, res) => createProgressController.execute(req, res))

export { progressRouter }