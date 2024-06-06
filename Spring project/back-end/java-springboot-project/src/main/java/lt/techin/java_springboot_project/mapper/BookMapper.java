package lt.techin.java_springboot_project.mapper;

import lt.techin.java_springboot_project.dto.BookDto;
import lt.techin.java_springboot_project.entity.Book;

public class BookMapper {

    public static BookDto mapToBookDto(Book book){
        return new BookDto(book.getId(), book.getTitle(), book.getDescription(), book.getIsbn(), book.getCover(), book.getPages());
    }

    public static Book mapToBook(BookDto bookDto){
        return new Book(bookDto.getId(), bookDto.getTitle(), bookDto.getDescription(), bookDto.getIsbn(), bookDto.getCover(), bookDto.getPages());
    }
}
