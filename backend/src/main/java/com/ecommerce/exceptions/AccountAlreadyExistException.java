package com.ecommerce.exceptions;

import javax.naming.AuthenticationException;

public class AccountAlreadyExistException extends AuthenticationException {
    public AccountAlreadyExistException(final String msg) {
        super(msg);
    }
}
