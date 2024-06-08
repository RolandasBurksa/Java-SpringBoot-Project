package lt.techin.java_springboot_project.service;

import lt.techin.java_springboot_project.dto.CategoryDto;

public interface CategoryService {
    CategoryDto createCategory(CategoryDto categoryDto);

    CategoryDto getCategoryById(Long categoryId);
}
