package lt.techin.java_springboot_project.service.impl;

import lombok.AllArgsConstructor;
import lt.techin.java_springboot_project.dto.CategoryDto;
import lt.techin.java_springboot_project.entity.Category;
import lt.techin.java_springboot_project.exception.ResourceNotFoundException;
import lt.techin.java_springboot_project.mapper.CategoryMapper;
import lt.techin.java_springboot_project.repository.CategoryRepository;
import lt.techin.java_springboot_project.service.CategoryService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {

        Category category = CategoryMapper.mapToCategory(categoryDto);
        Category savedCategory = categoryRepository.save(category);

        return CategoryMapper.mapToCategoryDto(savedCategory);
    }

    @Override
    public CategoryDto getCategoryById(Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(
                () -> new ResourceNotFoundException("Category do not exists with a given id: " + categoryId)
                );
        return CategoryMapper.mapToCategoryDto(category);
    }
}
