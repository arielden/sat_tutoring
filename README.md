# SAT Tutoring Web Application

SAT Math practice

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

#### Development Mode
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