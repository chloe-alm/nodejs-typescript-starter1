import express from 'express'
import { v1Router } from './router'
import { API_BASE_URL } from '../../constant';
// const API_BASE_URL = '/api/v1/'

// j exporte la fonction asynchrone qui renvoi une promesse avec une app en express, c est notre fonction d entre
  export const createServer = async (): Promise<express.Application> =>{
        const app: express.Application = express();

        app.use(`${API_BASE_URL}`,v1Router);

    app.listen(4000,()=>{
        console.log(`[App]: Listening on PORT ${4000}`)
    })

return app
    }
   
   

    
