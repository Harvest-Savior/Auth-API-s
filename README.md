# Authentication API with Express.js
#### Overview
This project is an authentication API built with Express.js designed to serve two types of users: farmer and medicine store. The API provides login, account management, and CRUD operations for the medicine entity. User data and medicine information are stored in a MySQL database.

#### Features
- User Authentication       : Registration and login functionality using JWT (JSON Web Tokens).
- Role-Based Access Control : Middleware ensures authorization based on user roles (farmer and medicine   store).
- Medicine CRUD Operations  : Create, read, update, and delete operations for medicine entities, accessible only by medicine store users.

# Access Our Deployed API



# Endpoint Description
### Farmer
### Create Account ( POST /register/farmer)

## Request:

- **Endpoint:** `/register/farmer`
- **Method:** `POST`
- **Request Body(JSON)**
  ```json
{
  "email": "example@example.com",
  "password": "your_password",
  "username": "user123",
  "address": "123 Street, City"
}

    

