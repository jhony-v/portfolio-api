import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import sendEmailController from "./controllers/sendEmailController";
import authorizationAPIMiddleware from "./middlewares/authorizationAPIMiddleware";
import { corsOptions } from "./config/cors";

dotenv.config()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/send-email',authorizationAPIMiddleware,sendEmailController);
app.get("/",(req,res) => {
    return res.json(process.env.AUTHORIZATION_PASSWORD);
})
export default app;
