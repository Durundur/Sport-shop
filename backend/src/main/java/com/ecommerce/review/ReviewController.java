package com.ecommerce.review;

import com.ecommerce.customer.Customer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/reviews")
public class ReviewController {
    private final ReviewRepository reviewRepository;

    ReviewController(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }

    @GetMapping
    public List<Review> findAllReviews(){
        return reviewRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Review> findReviewById(@PathVariable String id){
        return reviewRepository.findById(id);
    }

    @PostMapping
    public Review createReview(@RequestBody Review review){
        return reviewRepository.save(review);
    }
}
