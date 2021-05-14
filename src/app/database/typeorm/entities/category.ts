import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, CreateDateColumn } from "typeorm";
import { Skill } from './skill'

@Entity()
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar",{
        length: 50,
    })
    name: string;

    @Column("varchar",{
        length: 255,
    })
    description: string;

    @OneToMany(() => Skill, skill => skill.category)
    skills: Skill[]

    @CreateDateColumn()
    createAt: Date;

    @CreateDateColumn()
    updateAt:Date;
}
