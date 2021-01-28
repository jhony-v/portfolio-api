import { CorsOptions } from "cors"

export const CORS_ACCESS = [
  "https://jhony-24.github.io",
  "http://localhost:8000/",
]

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (CORS_ACCESS.indexOf(origin || "") !== -1) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
}
