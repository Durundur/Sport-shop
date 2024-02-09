package com.ecommerce.review;

import com.ecommerce.customer.Customer;
import com.ecommerce.product.Product;
import com.ecommerce.product.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/reviews")
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;

    ReviewController(ReviewRepository reviewRepository, ProductRepository productRepository){
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
    }

    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Review> findAllReviews(){
        return reviewRepository.findAll();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Optional<Review> findReviewById(@PathVariable String id){
        return reviewRepository.findById(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> createReview(@RequestBody Review review) {
        Optional<Product> optionalProduct = productRepository.findById(review.getProduct());
        Review savedReview;
        if (optionalProduct.isPresent()) {
            savedReview = reviewRepository.save(review);
            Product product = optionalProduct.get();
            if (product.getReviews() == null) {
                product.setReviews(new ArrayList<>());
            }
            product.getReviews().add(savedReview);
            productRepository.save(product);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReview);
    }
}
