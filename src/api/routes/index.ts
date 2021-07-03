import { Express } from "express"
import sendEmailController from "../controllers/sendEmailController";
import authorizationAPIMiddleware from "../middlewares/authorizationAPIMiddleware";

export default function routes(app: Express) {
    app.post('/send-email',authorizationAPIMiddleware,sendEmailController);
}
