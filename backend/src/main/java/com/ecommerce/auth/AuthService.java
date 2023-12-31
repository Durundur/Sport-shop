package com.ecommerce.auth;

import com.ecommerce.customer.Customer;
import com.ecommerce.customer.CustomerRepository;
import com.ecommerce.customer.Role;
import com.ecommerce.exceptions.AccountAlreadyExistException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private CustomerRepository customerRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    AuthService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager){
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }


    public Customer register(Customer customer) throws AccountAlreadyExistException {
        if(customerRepository.existsByEmail(customer.getEmail())){
            throw new AccountAlreadyExistException("Account with this email already exist");
        }
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        customer.setRole(Role.ROLE_USER);
        return customerRepository.save(customer);
    }

    public Customer authenticate(AuthRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        return customerRepository.findByEmail(loginRequest.getEmail());
    }
}
