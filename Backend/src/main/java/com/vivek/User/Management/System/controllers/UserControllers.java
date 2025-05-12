package com.vivek.User.Management.System.controllers;


import com.vivek.User.Management.System.model.User;
import com.vivek.User.Management.System.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserControllers {

   public  UserService service;

    @Autowired
    public UserControllers(UserService service){
        this.service=service;
    }

    @GetMapping("/users")
    public List<User>getUser(){
        return service.getAllUsers();
    }

    @PostMapping("/user")
    public User postUser(@RequestBody User user){
        return service.createUser(user);
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return service.findByUserId(id);
    }

    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User user,@PathVariable Long id){
        return service.updateUser(user,id);
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable  Long id){
        service.deleteUser(id);
    }

    @GetMapping("/user/name/{name}")
    public Optional<User> findByName(@PathVariable String name){
        return service.findByName(name);
    }

    @GetMapping("/user/registered-today")
    public List<User> todayRegisteredUser(){
        return service.findRegisteredTodayUser();
    }

    @GetMapping("/user/phoneNumber/{phoneNumber}")
    public Optional<User>findUserByPhoneNumber(@PathVariable String phoneNumber){
        return service.findByPhoneNumber(phoneNumber);
    }
}
