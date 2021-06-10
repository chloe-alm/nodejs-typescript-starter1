import { levelProps } from './levelTypes'

export class LevelRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill //Level
        this.entities = entities
    }

    public async create(levelProps: levelProps) {
        const LevelEntity = this.entities.Level

        return await LevelEntity.create({ number: levelProps.number, name: levelProps.name }).save()
    }

    public async getLevelById(levelId: number) {
        const LevelEntity = this.entities.Level

        return await LevelEntity.findOne(levelId)
    }
}