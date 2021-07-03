import express from "express"
import cors from "cors"
import { corsOptions } from "./config/cors";
import routes from "./api/routes";

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(corsOptions))
routes(app);

export default app;
