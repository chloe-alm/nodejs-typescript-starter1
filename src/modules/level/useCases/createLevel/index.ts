import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { LevelRepo } from '../../levelRepo'
import { CreateLevel } from './createLevel'
import { CreateLevelController } from './createLevelController'


//Je construit mon repo avec les entités dont j'ai besoin
const levelRepo = new LevelRepo(entitiesObject)
const createLevel = new CreateLevel(levelRepo)
const createLevelController = new CreateLevelController(createLevel)

export { createLevel, createLevelController }