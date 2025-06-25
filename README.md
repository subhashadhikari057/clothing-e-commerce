## 🔐 Authentication Module (Backend + Frontend)

Completed full authentication flow for both backend and frontend using modern, secure practices.

### ✅ Backend (Express + MongoDB)

- JWT-based authentication (Access + Refresh tokens)
- Google OAuth 2.0 integration via Passport
- Secure cookie handling with HTTP-only tokens
- Full auth features:
  - Register, Login, Logout
  - Token Refresh
  - User Profile
  - Change Password (for logged-in users)
- Robust security:
  - Rate limiting
  - Input validation
  - MongoDB query sanitization
  - Custom error handling and secure headers
- Structured directory layout:
backend/
├── controllers/
├── routes/
├── services/
├── middleware/
├── validators/
├── utils/
└── config/

### ✅ Frontend (Next.js 14 + Tailwind CSS)

- Fully responsive login/register pages
- Auth state managed via context or hooks
- JWT/token handling using cookies (client/server compatible)
- Google login integration
- Protected routes (client-side and server-side guards)
- Tailwind UI components for form handling and error display

### 🧪 Tested

- All endpoints tested via Postman
- Frontend forms tested on desktop & mobile

Authentication module is **complete and fully integrated** across both backend and frontend.
