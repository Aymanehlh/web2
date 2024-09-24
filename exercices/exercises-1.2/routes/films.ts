import { Router } from "express";
import { Film } from "../types";


const router = Router();

const defaultFilms : Film [] = [
  {
  id: 1,
  title: "Retour vers le futur",
  director: "Aymane",
  duration : 300,
},
{
  id: 2,
  title: "Seigneur des anneaux",
  director: "test",
  duration: 350,
},
{
  id: 3,
  title: "Harry Potter",
  director: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  duration:430,
},
{
  id: 4,
  title: "Pokemon",
  director: "Sacha",
  duration : 230,
},
]

router.get("/", (_req,res)=>{
  return res.json(defaultFilms);

});


export default router;