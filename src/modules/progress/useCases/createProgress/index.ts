import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { ProgressRepo } from '../../progressRepo'

import { SkillRepo } from '../../../skill/skillRepo'
import { StudentRepo } from '../../../student/studentRepo'
import { LevelRepo } from '../../../level/levelRepo'

import { CreateProgress } from './createProgress'
import { CreateProgressController } from './createProgressController'


//Je construit mon repo avec les entités dont j'ai besoin
const progressRepo = new ProgressRepo(entitiesObject)
const skillRepo = new SkillRepo(entitiesObject)
const studentRepo = new StudentRepo(entitiesObject)
const levelRepo = new LevelRepo(entitiesObject)

const createProgress = new CreateProgress(progressRepo, skillRepo, levelRepo, studentRepo)
const createProgressController = new CreateProgressController(createProgress)

export { createProgress, createProgressController }