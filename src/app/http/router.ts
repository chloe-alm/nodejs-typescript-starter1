import { Router, Request, Response } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
});

export { v1Router }