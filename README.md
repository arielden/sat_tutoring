# SAT Tutoring Web Application

A full-stack web application for SAT Math practice with React frontend and Node.js backend.

## Features

- Interactive math questions with multiple choice answers
- Real-time countdown timer (28:42 as shown in SAT interface)
- Question navigation and review marking
- Immediate feedback with explanations
- Responsive design matching SAT testing interface

## Project Structure

```
sat_tutoring/
├── server.js              # Node.js backend server
├── package.json           # Backend dependencies
├── .env                   # Environment variables
└── client/                # React frontend
    ├── src/
    │   ├── App.js         # Main application component
    │   ├── components/    # React components
    │   │   ├── QuizHeader.js
    │   │   ├── QuestionDisplay.js
    │   │   └── Timer.js
    │   └── index.js       # React entry point
    └── package.json       # Frontend dependencies
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install backend dependencies:**
   ```bash
   npm install
   ```

2. **Install frontend dependencies:**
   ```bash
   npm run install-client
   ```

### Running the Application

#### Development Mode (Recommended)
Run both backend and frontend simultaneously:
```bash
npm run dev-all
```

This will start:
- Backend server on http://localhost:5000
- React development server on http://localhost:3000

#### Individual Services

**Backend only:**
```bash
npm run dev
```

**Frontend only:**
```bash
npm run client
```

**Production:**
```bash
npm start
```

## API Endpoints

### GET /api/questions
Returns all available math questions.

### GET /api/questions/:id
Returns a specific question by ID.

### POST /api/submit-answer
Submit an answer for evaluation.
```json
{
  "questionId": 1,
  "selectedAnswer": "C"
}
```

## Features Implemented

- ✅ Math questions with multiple choice (A, B, C, D)
- ✅ Timer countdown functionality
- ✅ Question navigation
- ✅ Answer submission and feedback
- ✅ Mark for Review functionality
- ✅ Responsive design
- ✅ SAT-style interface

## Sample Questions

The application comes with 2 sample math questions:
1. Algebraic factoring: x² + 3x - 40
2. Function evaluation: f(x) = 2x² - 3x + 1

## Technology Stack

**Frontend:**
- React 18
- Axios for API calls
- CSS3 with responsive design

**Backend:**
- Node.js
- Express.js
- CORS enabled
- RESTful API

## Development Notes

- The timer starts at 28:42 (28 minutes 42 seconds) as shown in the reference image
- Question styling matches the SAT Digital interface
- Mobile-responsive design included
- Error handling for API calls
- Immediate feedback after answer submission