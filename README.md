# Authentication API with Express.js
#### Overview
This project is an authentication API built with Express.js designed to serve two types of users: farmer and medicine store. The API provides login, account management, and CRUD operations for the medicine entity. User data and medicine information are stored in a MySQL database.

#### Features
- **User Authentication:** Registration and login functionality using JWT (JSON Web Tokens).
- **Role-Based Access Control:** Middleware ensures authorization based on user roles (farmer and medicine   store).
- **Medicine CRUD Operations:** Create, read, update, and delete operations for medicine entities, accessible only by medicine store users.

# Access Our Deployed API



# Endpoint Description
## Farmer
### Request:

- **Endpoint:** `/register/farmer`
- **Method:** `POST`
- **Request Body (JSON):**
  ```json
  {
      "namaLengkap": "Examplename",
      "email": "example@example.com",
      "password": "your_password",
      "confPassword": "your_password",
      "file": "image.jpg"
  }
           
### Response
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Registrasi berhasil",
    "data": {
        "id": 4,
        "namaLengkap": "angel",
        "email": "angel@gmail.com",
        "password": "$2b$10$2JWsuJeNWL7fblQDUPm7uewCylioHALYMyzHLIFLs2XMI2zStZ2Aa",
        "gambar": "8a24fcc78c36fdc93766a4ec66a98a69.jpg",
        "url": "http://34.50.79.94:8080/uploads/8a24fcc78c36fdc93766a4ec66a98a69.jpg",
        "updatedAt": "2024-06-19T09:20:21.161Z",
        "createdAt": "2024-06-19T09:20:21.161Z"
    }

  


    
