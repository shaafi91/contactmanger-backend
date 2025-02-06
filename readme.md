### 📌 Project Overview
This is a **Node.js Backend API** for a contact management system, implementing **authentication, CRUD operations, and user authorization** using **MongoDB** and **Express.js**. The API follows **MVC architecture** and includes **JWT authentication, secure password hashing**, and **middleware for authorization**.

---

## 🛠 Project Requirements & Implementation
### ✅ 1. Authentication & Authorization
- **JWT Authentication** (Login & Register)
- **User access control**
- **Secure password hashing** using `bcrypt`
- **Middleware for authentication & authorization**

### ✅ 2. MongoDB & Mongoose Integration
- **User Model**: name, email, password, createdAt
- **Contact Model**: name, email, phone, user_id
- **Relationships between users & contacts**
- **Data validation & indexing**

### ✅ 3. MVC Architecture
- **Models**: Define MongoDB schemas (`User`, `Contact`)
- **Routes**: API endpoints for users & contacts
- **Controllers**: Handle API requests

### ✅ 4. CRUD Operations
- **Create Contact** (`POST /api/contacts`)
- **Read Contacts** (`GET /api/contacts`)
- **Update Contact** (`PUT /api/contacts/:id`)
- **Delete Contact** (`DELETE /api/contacts/:id`)

### ✅ 5. API with Express.js
- **Middleware** for authentication (`validateToken.js`)
- **Error handling** with meaningful responses
- **Async/Await** for database queries

---

## 🚀 Installation & Setup

1. **Clone the repository**  
   ```sh
   git clone https://github.com/shaafi91/contactmanger-backend
   cd mycontacts-backend
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file:
   ```sh
   ACCESS_TOKEN_SECRET=shaafi12
   CONNECTION_STRING=mongodb+srv://admin:admin@groupmcluster.vqc6b.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=groupmcluster
   ```

4. **Start the server**  
   ```sh
   npm start
   ```
   The API will run on `http://localhost:5001`

---

## 📂 Project Structure
```
mycontacts-backend/
|__config/
├── controllers/        # API Logic
├── middleware/         # Authentication & Authorization
├── models/            # Mongoose Schemas
├── routes/            # API Endpoints
├── server.js          # Main Entry Point
├── .env               # Environment Variables
├── README.md          # Documentation
```

---

## 🔥 API Endpoints
### 🔑 Authentication
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| POST   | `/users/register` | Register a new user |
| POST   | `/users/login`    | Login & get JWT token |

### 📞 Contact Management
| Method | Endpoint              | Description |
|--------|----------------------|-------------|
| GET    | `/api/contacts`       | Get all contacts |
| POST   | `/api/contacts`       | Create a new contact |
| GET    | `/api/contacts/:id`   | Get a contact by ID |
| PUT    | `/api/contacts/:id`   | Update a contact by ID |
| DELETE | `/api/contacts/:id`   | Delete a contact by ID |

---

## 👥 Team Members
- **Shaafici Ibraahim Nor** - C1211398  
- **Liiban Mohamed Cabdule** - C1211409  
- **Anas Abdirahman Aadan** - C1211490  
- **Ahmed Abdirashiid Ali** - C1211485

