package lt.techin.java_springboot_project.repository;

import lt.techin.java_springboot_project.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
