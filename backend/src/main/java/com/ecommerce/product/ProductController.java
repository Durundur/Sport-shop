package com.ecommerce.product;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/products")
public class ProductController {
    private final ProductRepository productRepository;

    ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> findAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Product> findProductById(@PathVariable String id){
        return productRepository.findById(id);
    }

    @PutMapping("{id}")
    public Product updateProduct(@RequestBody Product updatedProduct, @PathVariable String id){
        Optional<Product> productToUpdate = productRepository.findById(id);
        if(productToUpdate.isPresent()){
            return productRepository.save(updatedProduct);
        }
        return null;
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return productRepository.save(product);
    }
}
