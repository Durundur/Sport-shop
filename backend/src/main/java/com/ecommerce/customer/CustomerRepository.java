package com.ecommerce.customer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;


@RepositoryRestResource(path = "customers")
public interface CustomerRepository extends MongoRepository<Customer, String> {
    @Query("{ 'email': ?0 }")
    Optional<Customer> findByEmail(String email);
}