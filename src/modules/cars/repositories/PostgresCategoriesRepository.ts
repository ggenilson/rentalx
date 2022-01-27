import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    return null;
  }

  list(): Category[] {
    return null;
  }

  create(name: string, description: string): void {}
}

export { PostgresCategoriesRepository };
