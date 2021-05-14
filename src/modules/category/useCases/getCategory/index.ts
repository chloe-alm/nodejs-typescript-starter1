import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { CategoryRepo } from "../../categoryRepo";
import { GetCategory } from "./getCategory";
import { GetCategoryController } from "./getCategoryController";

//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject);
const getCategory = new GetCategory(categoryRepo);
const getCategoryController = new GetCategoryController(getCategory);

export { getCategory, getCategoryController };