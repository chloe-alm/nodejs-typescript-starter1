
import { Router } from "express";
import { createProgressController } from "./useCases/createProgress";
import { getProgressController } from "./useCases/getProgess";

const progressRouter: Router = Router();

progressRouter.post("/", (request, response) => {
  createProgressController.execute(request, response);
});

progressRouter.get("/", (request, response) => {
  getProgressController.execute(request, response);
});

export { progressRouter };