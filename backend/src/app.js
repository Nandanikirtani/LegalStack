import express, { json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended :true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser())


//routes
import userRouter from "./routes/User.routes.js"
import documentRouter from "./routes/Document.routes.js";

//declaration
app.use("/api/v1/user",userRouter)
app.use("/api/v1/document",documentRouter)
export {app}