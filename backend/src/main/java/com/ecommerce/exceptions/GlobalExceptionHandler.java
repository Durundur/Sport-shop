package com.ecommerce.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleSecurityException(Exception exception) {
        HttpStatus httpStatus;

        if (exception instanceof AccountAlreadyExistException) {
            httpStatus = HttpStatus.FORBIDDEN;
        } else if (exception instanceof BadCredentialsException) {
            httpStatus = HttpStatus.UNAUTHORIZED;
        } else if (exception instanceof AccountStatusException || exception instanceof AccessDeniedException) {
            httpStatus = HttpStatus.FORBIDDEN;
        } else {
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        ErrorResponse errorResponse = new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase(), exception.getMessage());
        return new ResponseEntity<>(errorResponse, httpStatus);
    }
}