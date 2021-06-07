import { Router, Request, Response } from 'express'
import { categoryRouter } from '../../modules/category/categoryRouter';
import { skillRouter } from '../../modules/skill/skillRouter';
import { userRouter } from '../../modules/user/userRouter';
import { progressRouter } from '../../modules/progress/progressRouter';

const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
});
v1Router.use("/skill",skillRouter);
v1Router.use("/categories", categoryRouter);
v1Router.use("/users", userRouter);
v1Router.use("/progresses", progressRouter);


export { v1Router }