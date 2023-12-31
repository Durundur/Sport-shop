package com.ecommerce.auth;

import com.ecommerce.customer.Role;

public class AuthResponse {
    private String token;
    private Long expiresIn;
    private Role role;

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getExpiresIn() {
        return this.expiresIn;
    }

    public void setExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public String getToken() {
        return this.token;
    }

    public AuthResponse(String token, Long expiresIn, Role role) {
        this.token = token;
        this.expiresIn = expiresIn;
        this.role = role;
    }
}
