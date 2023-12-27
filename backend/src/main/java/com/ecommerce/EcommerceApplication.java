package com.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

import java.util.Arrays;

@SpringBootApplication
@EnableMongoAuditing
public class EcommerceApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext c = SpringApplication.run(EcommerceApplication.class, args);
//		Arrays.stream(c.getBeanDefinitionNames()).forEach(System.out::println);
	}
}
