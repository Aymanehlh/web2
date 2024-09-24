import { Router } from "express";
import { Film } from "../types";

const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Retour vers le futur",
    director: "Aymane",
    duration: 300,
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
    duration: 430,
  },
  {
    id: 4,
    title: "Pokemon",
    director: "Sacha",
    duration: 230,
  },
];
//Show List
router.get("/", (_req, res) => {
  return res.json(defaultFilms);
});

//Show List By Id
router.get ("/:id", (req,res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film)=> film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
})

//GET /films/?minimum-duration=value
router.get("/", (req,res)=>{
  if (!req.query["minimum-duration"]){
    return res.json(defaultFilms);
  }
  const durationMin = Number(req.query["minimum-duration"]);
  const filteredFilms = defaultFilms.filter((film)=>{
    return film.duration <= durationMin;
  })
  return res.json(filteredFilms)

})

export default router;
