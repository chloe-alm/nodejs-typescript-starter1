//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";
import { categoryPropsBody } from "../../categoryTypes";

export class CreateCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async createCategories(bodyProps: categoryPropsBody) {
    const category = {
      name: bodyProps.name,
      description: bodyProps.description,
    };
    return await this.categoryRepo.createCategories(category);
  }
}