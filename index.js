import "dotenv/config"
import e from "express";
import { dbConnect } from "./db/index.js";
import todoRouter from "./routes/route.todo.js"
const app=e()
app.use(e.json())

app.use("/api/v1",todoRouter)


const PORT=7000

app.listen(PORT,async()=>{
    await dbConnect()
    console.log(`Server Running at http://localhost:${PORT}/`)
})

