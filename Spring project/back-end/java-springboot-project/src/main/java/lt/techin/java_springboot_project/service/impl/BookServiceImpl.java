package lt.techin.java_springboot_project.service.impl;

import lombok.AllArgsConstructor;
import lt.techin.java_springboot_project.dto.BookDto;
import lt.techin.java_springboot_project.entity.Book;
import lt.techin.java_springboot_project.exception.ResourceNotFoundException;
import lt.techin.java_springboot_project.mapper.BookMapper;
import lt.techin.java_springboot_project.repository.BookRepository;
import lt.techin.java_springboot_project.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    @Override
    public BookDto addBook(BookDto bookDto) {

//        Book book = new Book();
//        book.setTitle(bookDto.getTitle());
//        book.setDescription(bookDto.getDescription());
//        book.setIsbn(bookDto.getIsbn());
//        book.setCover(bookDto.getCover());
//        book.setPages(bookDto.getPages());
//
//        Book savedBook = bookRepository.save(book);
//
//        BookDto savedBookDto = new BookDto();
//        savedBookDto.setId(savedBook.getId());
//        savedBookDto.setTitle(savedBook.getTitle());
//        savedBookDto.setDescription(savedBook.getDescription());
//        savedBookDto.setIsbn(savedBook.getIsbn());
//        savedBookDto.setCover(savedBook.getCover());
//        savedBookDto.setPages(savedBook.getPages());
//
//        return savedBookDto;
        Book book = BookMapper.mapToBook(bookDto);
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
