// import {
//     Entity,
//     PrimaryGeneratedColumn,
//     Column,
//     CreateDateColumn,
//     UpdateDateColumn,
//     OneToMany,
//     BaseEntity,
//     OneToOne,
//     JoinColumn,
//   } from "typeorm";
//   import { Progresse } from "./progresse";
//   import { User } from "./user";
  
//   @Entity()
//   export class Student extends BaseEntity {
//     @PrimaryGeneratedColumn("uuid")
//     id: number;
  
//     @Column("varchar", {
//       length: 50,
//     })
//     firstName: string;
  
//     @Column("varchar", {
//       length: 50,
//     })
//     lastName: string;
  
//     @OneToMany(() => Progresse, (progresse) => progresse.student)
//     progresses: Progresse[];
  
//     @OneToOne(() => User, (user) => user.student)
//     @JoinColumn()
//     user: User;
  
//     @CreateDateColumn()
//     createdAt: Date;
  
//     @UpdateDateColumn()
//     updatedAt: Date;
//   }
  
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Progress } from './progress'
import { User } from './user'

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Progress, progress => progress.student)
    progresses: Progress[]
}