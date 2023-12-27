package com.ecommerce.auth;


import com.ecommerce.customer.Customer;
import com.ecommerce.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/auth")
public class AuthController {

    private final JwtTokenUtil jwtTokenUtil;
    private final AuthService authService;

    AuthController(AuthService authService, JwtTokenUtil jwtTokenUtil){
        this.authService = authService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody AuthRequest loginRequest) {
        Customer user = authService.authenticate(loginRequest);
        String token = jwtTokenUtil.generateToken(user);
        AuthResponse response = new AuthResponse();
        response.setToken(token);
        response.setExpiresIn(jwtTokenUtil.getExpirationTime());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Customer registerRequest) {
        Customer savedCustomer = authService.register(registerRequest);
        return ResponseEntity.ok(savedCustomer);
    }
}
