package lt.techin.java_springboot_project.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class BookAPIException extends RuntimeException{
    private HttpStatus status;
    private String message;
}
