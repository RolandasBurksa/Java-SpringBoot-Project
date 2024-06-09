package lt.techin.java_springboot_project.mapper;

import lt.techin.java_springboot_project.dto.BookDto;
import lt.techin.java_springboot_project.entity.Book;

public class BookMapper {

    public static BookDto mapToBookDto(Book book){
        return new BookDto(book.getId(), book.getTitle(), book.getDescription(), book.getIsbn(), book.getCover(), book.getPages(), book.getCategory().getId());
    }

    public static Book mapToBook(BookDto bookDto){
       Book book = new Book();
       book.setId(bookDto.getId());
       book.setTitle(bookDto.getTitle());
       book.setDescription(bookDto.getDescription());
       book.setIsbn(bookDto.getIsbn());
       book.setCover(bookDto.getCover());
       book.setPages(bookDto.getPages());
       return book;
    }
}
