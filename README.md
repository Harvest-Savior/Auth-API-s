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
### Create Account (`POST /register/farmer`)
#### Request:

- **Endpoint:** `/register/farmer`
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Request Body (Form-data):**
  ```plaintext
  namaLengkap: Examplename
  email: example@example.com
  password: your_password
  confPassword": your_password
  file: image.jpg
  
#### Response
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Registrasi berhasil",
    "data": {
        "id": 4,
        "namaLengkap": "Examplename",
        "email": "example@example.com",
        "password": "$2b$10$2JWsuJeNWL7fblQDUPm7uewCylioHALYMyzHLIFLs2XMI2zStZ2Aa",
        "gambar": "8a24fcc78c36fdc93766a4ec66a98a69.jpg",
        "url": "http://34.50.79.94:8080/uploads/**********.jpg",
        "updatedAt": "2024-06-19T09:20:21.161Z",
        "createdAt": "2024-06-19T09:20:21.161Z"
      }
    }
- **Error (400): Bad Request**
  ``` json
  {
    "status": "fail",
    "message": "Email sudah terdaftar"
  }
- **Error (400): Bad Request : Validasi email harus mengandung karakter '@'**
  ``` json
  {
    "status": "fail",
    "message": "Email tidak valid"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Password dan Confirm Password tidak sama"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Gambar belum disertakan"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Gambar yang diupload harus dalam tipe .png, .jpg, atau .jpeg"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Ukuran gambar tidak boleh lebih dari 5MB"  
  }

### Login (`POST /login/farmer`)
#### Request:

- **Endpoint:** `/login/farmer`
- **Method:** `POST`
- **Request Body (JSON):**
  ``` json
  {
    "email": "example@example.com",
    "password": "your_password"
  }
#### Response
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Berhasil login",
    "data": {
        "namaLengkap": "Examplename",
        "gambar": "http://34.50.79.94:8080/uploads/*********.jpg",
        "email": "example@example.com",
    }
  }
- **Error (400): Bad Request**
  ``` json
  {
    "status": "fail",
    "message": "Password salah"
  }
### Logout (`POST /logout/farmer`)
- **Endpoint:** `/logout/farmer`
- **Method:** `DELETE`
#### Response
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Berhasil logout"
  }
## Medicine Store
#### Request:
- **Endpoint:** `/register/store`
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Request Body (Form-data):**
  ```plaintext
  namaToko: Examplename
  email: example@example.com
  alamat: your_address
  noHP: your_telephone
  password: your_password
  confPassword": your_password
  file: image.jpg
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Registrasi berhasil",
    "data": {
        "id": 8,
        "namaToko": "Toko Jaya",
        "email": "jaya@gmail.com",
        "alamat": "Jl.Ukrim",
        "noHp": "082256718291",
        "password": "$2b$10$JmsjFsb.j5rVSQ4qXDNDcegUKApDmzDS/VhwSfWL5ErasLpYTrx3W",
        "gambar": "aa7c99f89b04361664f31d066f66f716.png",
        "url": "http://34.50.79.94:8080/uploads/aa7c99f89b04361664f31d066f66f716.png",
        "updatedAt": "2024-06-19T10:35:29.670Z",
        "createdAt": "2024-06-19T10:35:29.670Z"
    }
  }
- **Error (400): Bad Request**
  ``` json
  {
    "status": "fail",
    "message": "Email sudah terdaftar"
  }
- **Error (400): Bad Request : Validasi email harus mengandung karakter '@'**
  ``` json
  {
    "status": "fail",
    "message": "Email tidak valid"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Password dan Confirm Password tidak sama"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Gambar belum disertakan"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Gambar yang diupload harus dalam tipe .png, .jpg, atau .jpeg"  
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Ukuran gambar tidak boleh lebih dari 5MB"  
  }

  
    

