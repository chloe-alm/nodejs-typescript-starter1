import { Router } from 'express'
import { createLevelController } from './useCases/createLevel/'

const levelRouter: Router = Router();

///api/v1/skills/
levelRouter.post('/', (req, res) => createLevelController.execute(req, res))

export { levelRouter }