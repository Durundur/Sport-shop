package com.ecommerce.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProductRepository extends MongoRepository<Product, String> {
    @Query("{ $and: [ " +
            "{ 'name' : { $regex: ?0, $options: 'i' } }, " +
            "{ 'category' : { $regex: ?1, $options: 'i' } }, " +
            "{ 'newPrice' : { $lte: ?2, } } ] }")
    Page<Product> searchProducts(String name, String category, Double price, Pageable pageable);
}