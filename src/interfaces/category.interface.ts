import { z } from "zod";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { createCategorySchema } from "../schemas/category.schema";

export type CreateCategory = z.infer<typeof createCategorySchema>

export type CategoryRepo = Repository<Category>;
