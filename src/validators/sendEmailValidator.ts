import { body } from "express-validator";

export const sendEmailValidator = [
    body("email").exists().notEmpty().isEmail(),
    body("subject").exists().notEmpty(),
    body("message").exists().notEmpty(),
    body("name").exists().notEmpty()
]