package lt.techin.java_springboot_project.exception;

import lt.techin.java_springboot_project.entity.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BookAPIException.class)
    public ResponseEntity<ErrorDetails> handleTodoAPIException(BookAPIException exception,
                                                               WebRequest webRequest){
        ErrorDetails errorDetails = new ErrorDetails(
                LocalDateTime.now(),
                exception.getMessage(),
                webRequest.getDescription(false)
        );

        return  new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }
}
