import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryController = new ListCategoriesController(
  listCategoryUseCase
);

export { listCategoryController };