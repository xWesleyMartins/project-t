import { CategoryCreateDto } from './category.create.dto';

export interface CategoryUpdateDto extends CategoryCreateDto {
  category_name: string;
  // category_category: string;
}
