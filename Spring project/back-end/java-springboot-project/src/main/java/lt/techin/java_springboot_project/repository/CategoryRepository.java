package lt.techin.java_springboot_project.repository;

import lt.techin.java_springboot_project.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
