package lt.techin.java_springboot_project.service.impl;

import lombok.AllArgsConstructor;
import lt.techin.java_springboot_project.dto.RegisterDto;
import lt.techin.java_springboot_project.entity.Role;
import lt.techin.java_springboot_project.entity.User;
import lt.techin.java_springboot_project.exception.BookAPIException;
import lt.techin.java_springboot_project.repository.RoleRepository;
import lt.techin.java_springboot_project.repository.UserRepository;
import lt.techin.java_springboot_project.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public String register(RegisterDto registerDto) {

        // Check does username already exist in database
        if(userRepository.existsByUsername(registerDto.getUsername())){
            throw new BookAPIException(HttpStatus.BAD_REQUEST, "Username already exists!.");
        }

        // Check does email already exist in database
        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new BookAPIException(HttpStatus.BAD_REQUEST, "Email already exists!.");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);

        userRepository.save(user);

        return "User Registered Successfully!.";
    }
}
