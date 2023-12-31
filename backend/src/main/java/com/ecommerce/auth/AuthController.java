package com.ecommerce.auth;


import com.ecommerce.customer.Customer;
import com.ecommerce.exceptions.AccountAlreadyExistException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "api/auth")
@CrossOrigin
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
        AuthResponse response = new AuthResponse(token, jwtTokenUtil.getExpirationTime(), user.getRole());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody Customer registerRequest) throws AccountAlreadyExistException {
        Customer user =  authService.register(registerRequest);
        String token = jwtTokenUtil.generateToken(user);
        AuthResponse response = new AuthResponse(token, jwtTokenUtil.getExpirationTime(), user.getRole());
        return ResponseEntity.ok(response);
    }
}
