package lt.techin.java_springboot_project.service;

import lt.techin.java_springboot_project.dto.BookDto;

import java.util.List;

public interface BookService {

    BookDto addBook(BookDto bookDto);

    BookDto getBook(Long id);

    List<BookDto> getAllBooks();

    BookDto updateBook(BookDto bookDto, Long id);

    void deleteBook(Long id);

}

