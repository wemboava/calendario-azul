import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import RoutinesController from "../controllers/RoutinesController";

const routinesRouter = Router();

const routinesController = new RoutinesController();

routinesRouter.use(ensureAuthenticated);

routinesRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      date: Joi.date().required(),
      start_time: Joi.string(),
      end_time: Joi.string(),
      end_date: Joi.date(),
      time_course: Joi.string(),
      image: Joi.string().required(),
    },
  }),
  routinesController.create
);

routinesRouter.get(
  "/:month/:year",
  routinesController.index
);

routinesRouter.get(
  "/:id",
  routinesController.find
);

routinesRouter.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().required(),
      user_id: Joi.number().required(),
      name: Joi.string().required(),
      date: Joi.date().required(),
      start_time: Joi.string(),
      end_time: Joi.string(),
      end_date: Joi.date(),
      time_course: Joi.string(),
      image: Joi.string().required(),
    },
  }),
  routinesController.update
);

routinesRouter.delete(
  "/:id",
  routinesController.delete
);

export default routinesRouter;
