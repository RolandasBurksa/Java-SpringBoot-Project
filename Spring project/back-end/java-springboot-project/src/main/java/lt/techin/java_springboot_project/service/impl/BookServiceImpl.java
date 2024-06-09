package lt.techin.java_springboot_project.service.impl;

import lombok.AllArgsConstructor;
import lt.techin.java_springboot_project.dto.BookDto;
import lt.techin.java_springboot_project.entity.Book;
import lt.techin.java_springboot_project.entity.Category;
import lt.techin.java_springboot_project.exception.ResourceNotFoundException;
import lt.techin.java_springboot_project.mapper.BookMapper;
import lt.techin.java_springboot_project.repository.BookRepository;
import lt.techin.java_springboot_project.repository.CategoryRepository;
import lt.techin.java_springboot_project.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    private CategoryRepository categoryRepository;

    @Override
    public BookDto addBook(BookDto bookDto) {

        Book book = BookMapper.mapToBook(bookDto);

        Category category = categoryRepository.findById(bookDto.getCategoryId())
                .orElseThrow(()->
                        new ResourceNotFoundException("Category does not exist with id: " + bookDto.getCategoryId()));

        book.setCategory(category);

        Book addedBook = bookRepository.save(book);
        return BookMapper.mapToBookDto(addedBook);
    }

    @Override
    public BookDto getBook(Long id) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with given id: " + id));

        return BookMapper.mapToBookDto(book);
    }

    @Override
    public List<BookDto> getAllBooks() {

       List<Book> books = bookRepository.findAll();

        return books.stream()
                .map( BookMapper::mapToBookDto)
                .collect(Collectors.toList());
    }

    @Override
    public BookDto updateBook(BookDto bookDto, Long id) {

       Book book = bookRepository.findById(id)
                .orElseThrow(() -> new  ResourceNotFoundException("Book not found with given id: " + id));
       book.setTitle(bookDto.getTitle());
       book.setDescription(bookDto.getDescription());
       book.setIsbn(bookDto.getIsbn());
       book.setCover(bookDto.getCover());
       book.setPages(bookDto.getPages());

        Category category = categoryRepository.findById(bookDto.getCategoryId())
                .orElseThrow(()->
                        new ResourceNotFoundException("Category does not exist with id: " + bookDto.getCategoryId()));

        book.setCategory(category);

       Book updatedBook = bookRepository.save(book);

        return BookMapper.mapToBookDto(updatedBook);
    }

    @Override
    public void deleteBook(Long id) {

       Book book = bookRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Book not found with given id: " + id));

       bookRepository.deleteById(id);
    }
}
