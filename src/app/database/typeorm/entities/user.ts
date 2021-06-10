// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   JoinColumn,
//   ManyToOne,
//   OneToMany,
// } from "typeorm";
// import { Category } from "./category";
// import { Progresse } from "./progresse";

// @Entity()
// export class Skill {
//   @PrimaryGeneratedColumn("uuid")
//   id: number;

//   @Column("varchar", {
//     length: 50,
//   })
//   name: string;

//   @Column("varchar", {
//     length: 255,
//   })
//   description: string;

//   @ManyToOne(() => Category, (category) => category.skills)
//   @JoinColumn({ name: "categoryId" })
//   category: Category;

//   @OneToMany(() => Progresse, (progresse) => progresse.skill)
//   progresses: Progresse[];

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;
// }

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;
}