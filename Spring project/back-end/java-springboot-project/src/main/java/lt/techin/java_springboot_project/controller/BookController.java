package lt.techin.java_springboot_project.controller;

import lombok.AllArgsConstructor;
import lt.techin.java_springboot_project.dto.BookDto;
import lt.techin.java_springboot_project.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/books")
@AllArgsConstructor
public class BookController {

    private BookService bookService;

    // Build Add Book REST API
    @PostMapping
    public ResponseEntity<BookDto> addBook(@RequestBody BookDto bookDto){

        BookDto savedBook = bookService.addBook(bookDto);

        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    // Build Get Book REST API
    @GetMapping("{id}")
    public ResponseEntity<BookDto> getBook(@PathVariable("id") Long bookId){
        BookDto bookDto = bookService.getBook(bookId);
        return new ResponseEntity<>(bookDto, HttpStatus.OK);
    }

    // Build Get All Books REST API
    @GetMapping
    public ResponseEntity<List<BookDto>> getAllBooks(){
       List<BookDto> books = bookService.getAllBooks();

       return ResponseEntity.ok(books);
    };

    // Build Update Book REST API
    @PutMapping("{id}")
    public ResponseEntity<BookDto> updateBook(@RequestBody BookDto bookDto, @PathVariable("id") Long bookId){
        BookDto updatedBook = bookService.updateBook(bookDto, bookId);
        return ResponseEntity.ok(updatedBook);
    }

    // Build Delete Book REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long bookId){
         bookService.deleteBook(bookId);
         return ResponseEntity.ok("Book deleted successfully!.");
    }


}
