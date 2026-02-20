# NotesApp

## Backend Folder structure

<pre> ## 📂 Backend Folder Structure ```bash
backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── auth.controller.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── auth.routes.js
│   │
│   ├── services/
│   │   ├── user.service.js
│   │   ├── auth.service.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │
│   ├── utils/
│   │   ├── apiResponse.js
│   │   ├── asyncHandler.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
├── .gitignore
└── README.md
``` </pre>

## Frontend folder structure
<pre> '''
notesapp-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                  # images, icons, css
│   │
│   ├── components/              # reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── NoteCard.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Loader.jsx
│   │
│   ├── pages/                   # main pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CreateNote.jsx
│   │   ├── EditNote.jsx
│   │
│   ├── services/                # API calls
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── noteService.js
│   │
│   ├── context/                 # Global state
│   │   ├── AuthContext.jsx
│   │
│   ├── hooks/                   # Custom hooks
│   │   ├── useAuth.js
│   │
│   ├── routes/                  # Routing setup
│   │   ├── AppRoutes.jsx
│   │
│   ├── utils/                   # Helpers
│   │   ├── constants.js
│   │   ├── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── README.md
''' </pre>