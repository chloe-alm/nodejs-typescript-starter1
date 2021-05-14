import { Router } from 'express'

const skillRouter: Router = Router();

console.log('User router');

skillRouter.get('/', (req, res) => {
    res.json('Skills');
})

export { skillRouter }