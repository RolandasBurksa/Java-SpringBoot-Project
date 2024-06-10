package lt.techin.java_springboot_project.repository;

import lt.techin.java_springboot_project.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(String name);
}
