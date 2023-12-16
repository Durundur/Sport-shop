//package com.ecommerce.customer;
//import com.ecommerce.errorResponse.ErrorResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.webmvc.RepositoryRestController;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RepositoryRestController
//public class CustomerController {
//
//
//    private CustomerRepository customerRepository;
//
//    @Autowired
//    CustomerController(CustomerRepository customerRepository){
//        this.customerRepository = customerRepository;
//    }
//
//    @RequestMapping(value = "/adssad/e", method = RequestMethod.GET)
//    public ResponseEntity<?> getAllCustomers() {
//        List<Customer> customers = customerRepository.findAll();
//        return new ResponseEntity<>(customers, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getCustomerById(@PathVariable String id) {
//        Customer customer = customerRepository.findById(id).orElse(null);
//        if (customer != null) {
//            return new ResponseEntity<>(customer, HttpStatus.OK);
//        } else {
//            ErrorResponse errorResponse = new ErrorResponse("Resource not found");
//            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @PostMapping("")
//    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
//        Customer newCustomer = customerRepository.save(customer);
//        return new ResponseEntity<>(newCustomer, HttpStatus.OK);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<?> updateCustomer(@PathVariable String id, @RequestBody Customer customer) {
//        Customer existingCustomer = customerRepository.findById(id).orElse(null);
//        if (existingCustomer != null) {
//            Customer updatedCustomer = customerRepository.save(customer);
//            return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
//        } else {
//            ErrorResponse errorResponse = new ErrorResponse("Resource not found");
//            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteCustomer(@PathVariable String id) {
//        Customer existingCustomer = customerRepository.findById(id).orElse(null);
//        if (existingCustomer != null) {
//            customerRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            ErrorResponse errorResponse = new ErrorResponse("Resource not found");
//            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
//        }
//    }
//}
