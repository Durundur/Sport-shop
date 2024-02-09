package com.ecommerce.order;

import com.ecommerce.customer.Customer;
import com.ecommerce.customer.CustomerRepository;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/orders")
@CrossOrigin
public class OrderController {

    private final OrderRepository orderRepository;

    private final CustomerRepository customerRepository;

    OrderController(OrderRepository orderRepository, CustomerRepository customerRepository){
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
    }

    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Order> findAllOrders(){
        return orderRepository.findAll();
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public List<Order> findOrdersForCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Customer customer = customerRepository.findByEmail(userDetails.getUsername());
        return orderRepository.findByCustomerID(customer.getId());
    }

    @GetMapping("{id}")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public Optional<Order> findOrderById(@PathVariable String id){
        return orderRepository.findById(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public Order createOrder(@RequestBody Order order){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Customer customer = customerRepository.findByEmail(userDetails.getUsername());
        order.setCustomer(customer.getId());
        order.setStatus("Złożone");
        return orderRepository.save(order);
    }


    @DeleteMapping("{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteOrderById(@PathVariable String id){
        orderRepository.deleteById(id);
    }
}
