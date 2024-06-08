package lt.techin.java_springboot_project.controller;

import lombok.AllArgsConstructor;
import lt.techin.java_springboot_project.dto.CategoryDto;
import lt.techin.java_springboot_project.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private CategoryService categoryService;

    // Build Create or Add Category REST API
    @PostMapping
    public ResponseEntity<CategoryDto> creteCategory(@RequestBody CategoryDto categoryDto){
        CategoryDto category = categoryService.createCategory(categoryDto);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }
}
