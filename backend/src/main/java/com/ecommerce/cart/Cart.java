package com.ecommerce.cart;

import com.ecommerce.customer.Customer;
import com.ecommerce.order.OrderItem;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

import java.util.List;

@Document(collection = "carts")
public class Cart {
    @Id
    private String id;
    @Field(targetType = FieldType.OBJECT_ID)
    private String customer;
    private List<OrderItem> products;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public List<OrderItem> getProducts() {
        return products;
    }

    public void setProducts(List<OrderItem> products) {
        this.products = products;
    }
}
