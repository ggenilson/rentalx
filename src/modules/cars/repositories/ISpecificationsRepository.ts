import { Specification } from "../model/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ISpecificationsDTO {
  name: string;
  description: String;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ISpecificationsDTO };
