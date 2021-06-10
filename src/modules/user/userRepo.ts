// // import { hash } from "bcrypt";

// export class UserRepo {
//     private entities: any;
  
//     constructor(entities: any) {
//       this.entities = entities;
//     }
  
//     public async createUser(data: any) {
//       const UserEntity = this.entities.User;
//       const { firstName, lastName, email, password } = data;
//       // const hashedPassword = await hash(password, 10);
//       const user = await UserEntity.create({
//         firstName,
//         lastName,
//         email,
//         password,
//       }).save();
//       console.log("USER REPO", user);
//       return user;
//     }
  
//     public async getUsers() {
//       const UserEntity = this.entities.User;
//       const user = await UserEntity.find();
//       return user;
//     }
  
//     public async getUserById(id: any) {
//       const UserEntity = this.entities.User;
//       const user = await UserEntity.find({ where: { id } });
//       return user;
//     }
  
//     public async getUserByEmail(email: any) {
//       const UserEntity = this.entities.User;
//       const user = await UserEntity.find({ where: { email } });
//       return user;
//     }
  
//     public async editUser(data: any, id: any) {
//       const UserEntity = this.entities.User;
//       const checkUser = await UserEntity.findOne({ where: { id } });
//       if (checkUser) {
//         const result = await UserEntity.merge(checkUser, data).save();
//         return result;
//       }
//     }
  
//     public async deleteUser(id: any) {
//       const UserEntity = this.entities.User;
//       const deleteUser = await UserEntity.delete(id);
//       return deleteUser;
//     }
//   }

import { createUserProps } from './userTypes'

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: createUserProps) {
        const UserEntity = this.entities.User

        const exists = await this.exists(userProps.email);

        if (!exists) {
            await UserEntity.create(userProps).save()
        }

        return
    }

    public async exists(email: string): Promise<boolean> {
        const UserEntity = this.entities.User;

        const result = await UserEntity.findOne({ email: email })

        return !!result === true;
    }
}