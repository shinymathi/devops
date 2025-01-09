# Book Library MERN Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) <boltAction type="file" filePath="README.md"># Book Library MERN Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing your personal book library.

## Features

- User authentication (signup/login)
- CRUD operations for books
- Protected routes
- Responsive design with Tailwind CSS
- JWT-based authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- Git (optional)

## Installation

1. Clone the repository (or download and extract):
```bash
git clone <repository-url>
cd book-library
```

2. Install Backend Dependencies:
```bash
cd backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```

4. Configure Environment Variables:
   - In the `backend` folder, create a `.env` file:
   ```
   PORT=5000
   MONGODB_URL=mongodb://localhost:27017/book-library
   JWT_SECRET=your_jwt_secret_key
   ```

## Running the Application

1. Start the Backend Server:
```bash
cd backend
npm run dev
```

2. Start the Frontend Development Server:
```bash
cd frontend
npm run dev
```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- POST `/api/auth/signup` - Register a new user
- POST `/api/auth/login` - Login user

### Books (Protected Routes)
- GET `/api/books` - Get all books
- GET `/api/books/:id` - Get a specific book
- POST `/api/books` - Create a new book
- PATCH `/api/books/:id` - Update a book
- DELETE `/api/books/:id` - Delete a book

## Project Structure

```
book-library/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── app.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   └── App.jsx
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.