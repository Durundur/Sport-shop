package com.ecommerce.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/products")
@CrossOrigin
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

    @GetMapping("/search")
    public Page<Product> searchProducts(
            @RequestParam(defaultValue = "") String name,
            @RequestParam(defaultValue = "") String category,
            @RequestParam(defaultValue = "9999999999999999") Double price,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return productRepository.searchProducts(name, category, price, pageable);
    }

    @PutMapping("{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Product updateProduct(@RequestBody Product updatedProduct, @PathVariable String id){
        Optional<Product> productToUpdate = productRepository.findById(id);
        if(productToUpdate.isPresent()){
            return productRepository.save(updatedProduct);
        }
        return null;
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Product createProduct(@RequestBody Product product){
        return productRepository.save(product);
    }
}
