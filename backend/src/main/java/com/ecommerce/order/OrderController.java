package com.ecommerce.order;

import com.ecommerce.customer.Customer;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/orders")
@CrossOrigin
public class OrderController {

    private final OrderRepository orderRepository;

    OrderController(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Order> findAllOrders(){
        return orderRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Order> findOrderById(@PathVariable String id){
        return orderRepository.findById(id);
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order){
        return orderRepository.save(order);
    }

    @DeleteMapping("{id}")
    public void deleteOrderById(@PathVariable String id){
        orderRepository.deleteById(id);
    }
}
