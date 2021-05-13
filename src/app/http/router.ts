import {Request, Response, Router } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_req:Request, res:Response)=>{

    res.status(200).json('Hello world');
})
export{v1Router}