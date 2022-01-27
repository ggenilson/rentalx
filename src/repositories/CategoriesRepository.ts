import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: String;
  description: string;
}

class CategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
  }
}

export { CategoriesRepository };