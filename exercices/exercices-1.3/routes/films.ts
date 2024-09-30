import { Router } from "express";
import { Film, newFilm, NewPizza } from "../types";

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

//Show List By Id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

//GET /films/?minimum-duration=value
router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    return res.json(defaultFilms);
  }
  const durationMin = Number(req.query["minimum-duration"]);
  const filteredFilms = defaultFilms.filter((film) => {
    return film.duration >= durationMin;
  });
  return res.json(filteredFilms);
});

//POST CREATE ONE

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <=0
  ) {
    return res.sendStatus(400);
  }
  const {title, director, duration} = body as newFilm;

    const nextId =
      defaultFilms.reduce(
        (maxId, film) => (film.id > maxId ? film.id : maxId),
        0
      ) + 1;
  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
  };
  defaultFilms.push(newFilm);
  return res.json(newFilm);
});

export default router;
