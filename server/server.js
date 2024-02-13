import cookieParser from "cookie-parser";
import express from "express";





const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/test", (req,res) => {
    res.json("Hello Goodluck!")
});




app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
})
