package com.ecommerce.cart;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/carts")
public class CartController {
    private final CartRepository cartRepository;

    CartController(CartRepository cartRepository){
        this.cartRepository = cartRepository;
    }

    @GetMapping
    public List<Cart> findAllCarts(){
        return cartRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Cart> findCartById(@PathVariable String id){
        return cartRepository.findById(id);
    }
}
