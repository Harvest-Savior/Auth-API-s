# Authentication API with Express.js
#### Overview
This project is an authentication API built with Express.js designed to serve two types of users: farmer and medicine store. The API provides login, account management, and CRUD operations for the medicine entity. User data and medicine information are stored in a MySQL database.

#### Features
- **User Authentication:** Registration and login functionality using JWT (JSON Web Tokens).
- **Role-Based Access Control:** Middleware ensures authorization based on user roles (farmer and medicine   store).
- **Medicine CRUD Operations:** Create, read, update, and delete operations for medicine entities, accessible only by medicine store users.

# Access Our Deployed API
jan lupa isi ini los


# Endpoint Description
## Farmer
### Create Account (`POST /register/farmer`)
#### Request:

- **Endpoint:** `/register/farmer`
- **Method:** `POST`
- **Headers:**
    - `Content-Type`: `multipart/form-data`
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
- **Header:** 
  - `Content-Type`: `multipart/form-data`
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
        "url": "http://34.50.79.94:8080/uploads/***************.png",
       
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
### Logout (`POST /logout/store`)
- **Endpoint:** `/logout/store`
- **Method:** `DELETE`
#### Response
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Berhasil logout"
  }
# Medicine CRUD Operations
### Create Medicine
#### Request:
- **Endpoint:** `/addMedicine`
- **Method:** `POST`
- - **Headers:**
    - `Authorization`: `Bearer <token>`
    - `Content-Type`: `multipart/form-data`
- **Request Body (Form-data):**
  ```plaintext
  namaObat: Examplename
  deskripsi: Explain Deskripsi
  Harga: 10000
  Stok: 12
  penyakit: Jamur Daun pada Tomat
  file: image.jpg
  linkProduct: url

  Notes : Gunakan Bearer token yang didapat ketika Login

#### Response:
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Data obat berhasil ditambahkan",
    "medicine": {
        "id": 15,
        "namaObat": "coba obat",
        "deskripsi": "ini deskripis obat",
        "stok": "12",
        "harga": "12000",
        "penyakit": "Bercak Daun pada Cabai",
        "gambar": "*************.jpeg",
        "linkProduct": "https://dillinger.io/",
        "url": "http://34.50.79.94:8080/uploads/***********.jpeg",
    }
  }
- **Error (400): Bad Request : Jika Bearer Token tidak di input**
   ``` json
  {
   "status": "fail",
   "message": "Token belum disertakan"
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "User tidak ditemukan"
  }
- **Error (400): Bad Request**
   ``` json
  {
    "status": "fail",
    "message": "Nama obat sudah ada, silakan gunakan nama obat lain"
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

### Read Medicine
#### Request:
- **Endpoint:** `/getmedicines`
- **Method:** `GET`
- **Headers:**
    - `Authorization`: `Bearer <token>`
#### Response:
- **Success (200): OK**
  ``` json
  {
    "status": "success",
    "message": "Berhasil memuat data obat",
    "medicines": [
        {
            "id": 15,
            "namaObat": "coba obat",
            "deskripsi": "ini deskripis obat",
            "stok": "Stock"
            "harga": "Price",
            "penyakit": "Disease",
            "gambar": "**********.jpeg",
            "linkProduct": "https:*********",
            "url": "http://34.50.79.94:8080/uploads/*********.jpeg",
        }
    ]
  }
- **Error (500): Internal Server Error**
   ``` json
   {
  "status": "fail",
  "message": "Internal Server Error"
  }
### Delete Medicine
#### Request:
- **Endpoint:** `/delMedicines/:id`
- **Method:** `DELETE`
- **Headers:**
    - `Authorization`: `Bearer <token>`
#### Response:
- **Success (200): OK**
  ``` json
  {
  "status": "success",
  "message": "Data obat berhasil dihapus"
  }
- **Error (400): Bad Request**
   ``` json
   {
  "status": "fail",
  "message": "Data obat tidak ditemukan atau Anda tidak memiliki izin"
  }
- **Error (500): Internal Server Error**
   ``` json
   {
  "status": "fail",
  "message": "Internal Server Error"
  }
### Update Medicine
#### Request:
- **Endpoint:** `/updateMedicines/:id`
- **Method:** `PUT`
- **Headers:**
    - `Authorization`: `Bearer <token>`
    - `Content-Type`: `multipart/form-data`
- **Request Body (Form-data):**
  ```plaintext
  `namaObat`: Updated Medicine Name
  deskripsi: Updated Medicine Description
  stok: Updated Stock
  harga: Updated Price
  penyakit: Updated Disease
  gambar: image file
  linkProduct: Updated Product Link
  
    

