//package com.ecommerce.product;
//
//import com.ecommerce.errorResponse.ErrorResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/v1/api/products")
//public class ProductController {
//    @Autowired
//    private ProductRepository productRepository;
//
//    @GetMapping("")
//    public ResponseEntity<?> getAllProducts() {
//        List<Product> products = productRepository.findAll();
//        return new ResponseEntity<>(products, HttpStatus.OK);
//    }
//
//    @GetMapping("{id}")
//    public ResponseEntity<?> getProductById(@PathVariable String id){
//        Product product = productRepository.findById(id).orElse(null);
//        if(product != null){
//            return new ResponseEntity<>(product, HttpStatus.OK);
//        } else {
//            ErrorResponse errorResponse = new ErrorResponse("Resource not found");
//            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @PostMapping("")
//    public Product createProduct(@RequestBody Product product){
//        return productRepository.save(product);
//    }
//}
