# Flight Comparison Platform

A modern web application for comparing flight prices and booking options across different airlines.

## 🌟 Features

- ✈️ Real-time flight search and comparison
- 🔍 Advanced filtering options
- 💰 Price comparison across multiple airlines
- 📅 Flexible date selection
- 🔐 User authentication and booking management
- 📱 Responsive design for all devices
- 🌐 Multi-language support

## 🛠️ Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - Redux for state management
  - Axios for API calls
  - CSS3/SCSS

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication
  - RESTful API architecture

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ankitrathore2006/flight-comparign.git
cd flight-comparign
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory with the following structure:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/flight-comparison

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Flight API Configuration
FLIGHT_API_KEY=your_flight_api_key
FLIGHT_API_URL=https://api.flight-service.com

# Email Configuration (Optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password

# Redis Configuration (Optional)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
```

4. Create a `.env` file in the frontend directory:
```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_NOTIFICATIONS=true
```

5. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server (in a new terminal)
cd frontend
npm start
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Flight Endpoints

- `GET /api/flights/search` - Search flights
- `GET /api/flights/:id` - Get flight details
- `POST /api/flights/book` - Book a flight
- `GET /api/flights/bookings` - Get user bookings

### User Endpoints

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/bookings` - Get user bookings

## 🧪 Testing

Run the test suite:
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📦 Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server
- `npm test` - Run tests
- `npm run lint` - Run linter

### Frontend Scripts
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linter

### Running Both Servers
To run both frontend and backend servers concurrently, you can use one of these methods:

1. Using the root package.json script (recommended):
```bash
# From the root directory
npm run dev
```

2. Using separate terminals:
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

## 🔐 Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Rate limiting
- Input validation
- CORS protection
- Helmet security headers
- XSS protection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Ankit Rathore - Initial work

## 🙏 Acknowledgments

- All contributors who have helped shape this project
- Flight API providers
- Open source community

