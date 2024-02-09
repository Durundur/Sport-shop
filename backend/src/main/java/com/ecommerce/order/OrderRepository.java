package com.ecommerce.order;

import com.ecommerce.customer.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;


public interface OrderRepository extends MongoRepository<Order, String> {
    @Query("{ 'customer': ?0 }")
    List<Order> findByCustomerID(String customerID);
}
