package com.ecommerce.customer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;


public interface CustomerRepository extends MongoRepository<Customer, String> {
    @Query("{ 'email': ?0 }")
    Customer findByEmail(String email);
}