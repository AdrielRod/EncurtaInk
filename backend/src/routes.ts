import { Router, Request, Response } from "express";
import { signIn } from "./utils";
require('dotenv').config();


const router = Router()
router.post('/login', (req: Request, res: Response) => {
    signIn(req, res)
})

export {router}