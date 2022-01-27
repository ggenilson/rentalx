import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) =>
  listCategoryController.handle(request, response)
);

export { categoriesRoutes };
