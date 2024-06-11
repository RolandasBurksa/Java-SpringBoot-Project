package lt.techin.java_springboot_project.service;

import lt.techin.java_springboot_project.dto.LoginDto;
import lt.techin.java_springboot_project.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
