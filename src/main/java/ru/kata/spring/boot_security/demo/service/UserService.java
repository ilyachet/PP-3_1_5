package ru.kata.spring.boot_security.demo.service;





import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService extends UserDetailsService {

    User findByUsername(String username);
    boolean save(User user);
    boolean update(User user);
    boolean delete(long id);
    User getUser(long id);
    List<User> getAllUser();
    List<Role> getAllRole();
    Role getRoleById(long roleId);

    Role getRoleByName(String name);
}
