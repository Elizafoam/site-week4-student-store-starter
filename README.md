# Student Store Starter Code

## Unit Assignment: Student Store

Submitted by: **Elizabeth Johnson**

### Application Features

#### CORE FEATURES


- [X] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [X] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [X] **Products Model**: Develop a model to represent individual items available in the store. 
  - [X] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [X] Implement methods for CRUD operations on products.
  - [X] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [X]**Orders Model**: Develop a model to manage orders. 
  - [X] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [X] Implement methods for creating, fetching, updating, and deleting orders.
  - [X] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [X] **Order Items Model**: Develop a model to represent the items within an order. 
  - [X] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [X] Implement methods for fetching and creating order items.
- [X] **API Endpoints**
  - [X] **Product Endpoints**:
    - [X] `GET /products`: Fetch a list of all products.
    - [X] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [X] `POST /products`: Add a new product to the database.
    - [X] `PUT /products/:id`: Update the details of an existing product.
    - [X] `DELETE /products/:id`: Remove a product from the database.
  - [X] **Order Endpoints**:
    - [X] `GET /orders`: Fetch a list of all orders.
    - [X] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [X] `POST /orders`: Create a new order with order items.
    - [X] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [X] `DELETE /orders/:order_id`: Remove an order from the database.
- [X] **Frontend Integration**
  - [X] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [ ] **Added Endpoints**
  - [ ] Create an endpoint for fetching all orders in the database.
  - [ ] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [X] **Implement Your Own Frontend**
  - [X] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video

![Walkthrough 1](student-store-ui/src/assets/Unit4Vid1.gif)
![Walkthrough 2](student-store-ui/src/assets/Unit4Vid2.gif)
![Walkthrough 3](student-store-ui/src/assets/Unit4Vid3.gif)
![Walkthrough 4](student-store-ui/src/assets/Unit4Vid4.gif)
![Walkthrough 5](student-store-ui/src/assets/Unit4Vid5.gif)
![Walkthrough 6](student-store-ui/src/assets/Unit4Vid6.gif)
![Walkthrough 7](student-store-ui/src/assets/Unit4Vid7.gif)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

We could have gotten more information on how to connect the frontend to the backend.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Spend more time updating the frontend and add more functionality.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

The demo went well overall

### Open-source libraries used

None

### Shout out

FTL interns and instructors


