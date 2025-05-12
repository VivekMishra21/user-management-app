package com.vivek.User.Management.System.repository;

import com.vivek.User.Management.System.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User>findByPhoneNumber(String phoneNumber);

    @Query("SELECT u FROM User u WHERE DATE(u.createdAt)=CURRENT_DATE")
    List<User> findUserRegisteredToday();

    Optional<User>findByName(String name);

}
