package com.ecommerce.auth;

public class AuthResponse {
    private String token;
    private Long expiresIn;

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
}
