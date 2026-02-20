# NotesApp

## Backend Folder structure

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