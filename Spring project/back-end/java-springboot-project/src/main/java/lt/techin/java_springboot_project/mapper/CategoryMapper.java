package lt.techin.java_springboot_project.mapper;

import lt.techin.java_springboot_project.dto.CategoryDto;
import lt.techin.java_springboot_project.entity.Category;

public class CategoryMapper {

    public static CategoryDto mapToCategoryDto(Category category){
        return new CategoryDto(category.getId(), category.getCategoryName());
    }

    public static Category mapToCategory(CategoryDto categoryDto){
        return new Category(categoryDto.getId(), categoryDto.getCategoryName());
    }
}
