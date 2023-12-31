package com.ecommerce.customer;


import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/customers")
@CrossOrigin
public class CustomerController {

    private final CustomerRepository customerRepository;

    CustomerController(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    @GetMapping
    public List<Customer> findAllCustomers(){
        return customerRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Customer> findCustomerById(@PathVariable String id){
        return customerRepository.findById(id);
    }

}
