package com.vivek.User.Management.System.service;


import com.vivek.User.Management.System.model.User;
import com.vivek.User.Management.System.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User findByUserId(Long id){
        return userRepository.findById(id).orElseThrow();
    }

    public Optional<User> findByPhoneNumber(String phoneNumber){
        return userRepository.findByPhoneNumber(phoneNumber);
    }

    public List<User> findRegisteredTodayUser(){
        return userRepository.findUserRegisteredToday();
    }
    public Optional<User> findByName(String name){
        return userRepository.findByName(name);
    }
    public User updateUser(User user,Long id){
     User existingUser= userRepository.findById(id).orElseThrow();
     existingUser.setName(user.getName());
     existingUser.setEmail(user.getEmail());
     existingUser.setPhoneNumber(user.getPhoneNumber());
     return userRepository.save(existingUser);
    }

    public void deleteUser(Long id){

        userRepository.deleteById(id);
    }

}
