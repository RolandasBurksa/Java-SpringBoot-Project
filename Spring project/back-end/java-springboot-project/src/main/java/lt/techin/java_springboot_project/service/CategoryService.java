package lt.techin.java_springboot_project.service;

import lt.techin.java_springboot_project.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
    CategoryDto createCategory(CategoryDto categoryDto);

    CategoryDto getCategoryById(Long categoryId);

    List<CategoryDto> getAllCategories();

    CategoryDto updateCategory(Long categoryId, CategoryDto updatedCategory);

    void deleteCategory(Long categoryId);
}
