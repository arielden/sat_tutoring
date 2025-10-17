# SAT Tutoring Web Application

A full-stack web application for SAT math practice with React frontend and Node.js backend, featuring timed quizzes and multiple choice questions.

## 🏗️ Project Structure

```
sat_tutoring/
├── server.js                 # Node.js/Express backend server
├── package.json              # Backend dependencies and scripts
├── .env                      # Environment variables
├── client/                   # React frontend application
│   ├── package.json          # Frontend dependencies
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js            # Main application component
│       ├── App.css           # Main application styles
│       ├── index.js          # React entry point
│       ├── index.css         # Global styles
│       └── components/       # React components
│           ├── QuizHeader.js
│           ├── QuizHeader.css
│           ├── QuestionDisplay.js
│           ├── QuestionDisplay.css
│           ├── Timer.js
│           └── Timer.css
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- PowerShell (Windows) or Terminal (macOS/Linux)

### Installation & Setup

1. **Clone and navigate to the project:**
   ```powershell
   cd F:\Projects\Software\sat_tutoring
   ```

2. **Install all dependencies (backend + frontend):**
   ```powershell
   npm run setup
   ```
   
   Or manually:
   ```powershell
   npm install
   cd client; npm install; cd ..
   ```

### 🖥️ Development (Windows PowerShell)

**Option 1: Run both servers concurrently (Recommended)**
```powershell
npm run dev-all
```

**Option 2: Run in separate PowerShell windows**
```powershell
npm run dev-win
```

**Option 3: Manual setup (separate terminals)**

Terminal 1 (Backend):
```powershell
npm run dev
```

Terminal 2 (Frontend):
```powershell
npm run client
```

### 🌐 Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Endpoints:**
  - GET `/api/questions` - Get all questions
  - GET `/api/questions/:id` - Get specific question
  - POST `/api/submit-answer` - Submit an answer

## 🛠️ Development Environment Settings

### PowerShell Configuration
This project is configured for Windows PowerShell development:
- Uses `;` instead of `&&` for command chaining
- Includes PowerShell-specific npm scripts
- Path separators are Windows-compatible

### Environment Variables (.env)
```
PORT=5000
NODE_ENV=development
```

### Key Development Commands

| Command | Description |
|---------|-------------|
| `npm run setup` | Install all dependencies (backend + frontend) |
| `npm run dev` | Start backend development server with nodemon |
| `npm run client` | Start React development server |
| `npm run dev-all` | Run both servers concurrently |
| `npm run dev-win` | Run both servers in separate PowerShell windows |
| `npm run build` | Build React app for production |
| `npm start` | Start production server |

## 📱 Features

- **Timed Quiz Interface**: 28+ minute countdown timer
- **Math Questions**: SAT-style algebra and function problems
- **Multiple Choice**: A, B, C, D answer options
- **Real-time Feedback**: Immediate answer validation
- **Responsive Design**: Works on desktop and mobile
- **Mark for Review**: Flag questions for later review
- **Progress Tracking**: Question navigation and status

## 🎨 UI Components

### QuizHeader
- Section title and question counter
- Timer display with formatting
- Control buttons (Directions, Hide, Mark for Review)
- Top navigation (Calculator, Reference, More)

### QuestionDisplay
- Question text with proper formatting
- Multiple choice options (A, B, C, D)
- Visual feedback for correct/incorrect answers
- Selection highlighting

### Timer
- Countdown functionality
- Visual warnings for low time
- Automatic time formatting (MM:SS)

## 🔧 Customization

### Adding New Questions
Edit the `mathQuestions` array in `server.js`:

```javascript
{
  id: 3,
  question: "Your question here",
  options: [
    { id: 'A', text: 'Option A text' },
    { id: 'B', text: 'Option B text' },
    { id: 'C', text: 'Option C text' },
    { id: 'D', text: 'Option D text' }
  ],
  correctAnswer: 'A',
  explanation: 'Explanation of the correct answer'
}
```

### Modifying Timer
Change the initial time in `App.js`:
```javascript
const [timeRemaining, setTimeRemaining] = useState(28 * 60 + 42); // 28:42
```

### Styling
- Main styles: `client/src/App.css`
- Component styles: `client/src/components/*.css`
- Global styles: `client/src/index.css`

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```powershell
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **CORS errors:**
   - Ensure backend is running on port 5000
   - Check proxy setting in client/package.json

3. **Module not found:**
   ```powershell
   cd client; npm install; cd ..
   npm install
   ```

4. **PowerShell execution policy:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

### Development Tips

- **Hot Reload**: Both frontend and backend support hot reloading
- **API Testing**: Use http://localhost:5000/api/questions to test backend
- **Console Logs**: Check browser console and terminal for debugging
- **Network Tab**: Monitor API calls in browser developer tools

## 📦 Production Deployment

1. **Build the React app:**
   ```powershell
   npm run build
   ```

2. **Set environment to production:**
   ```
   NODE_ENV=production
   ```

3. **Start the server:**
   ```powershell
   npm start
   ```

## 🤝 Contributing

1. Follow the existing code structure
2. Use PowerShell-compatible commands
3. Test both frontend and backend changes
4. Update documentation as needed

## 📄 License

This project is for educational purposes.