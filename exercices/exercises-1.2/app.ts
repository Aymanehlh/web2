import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmsRouter from "./routes/films";

const app = express();
let numGet = 0;

app.use ((req,_res,next)=>{
    if (req.method === "GET")
    console.log("GET counter : ", numGet++ );
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmsRouter);



export default app;
