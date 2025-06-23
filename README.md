# 🧣 Ambika Pashmina

A refined and minimal e-commerce frontend built with **Next.js 14** and **Tailwind CSS**, designed for showcasing premium pashmina products. Fully responsive with dropdowns, currency support, and mobile navigation.

## ✨ Features

- 🌐 Responsive Navbar with dropdowns
- 🎯 Currency selector (NPR default)
- 🛒 Cart icon always visible
- 📱 Elegant mobile drawer menu
- 🖼️ Custom font/logo branding
- 🎨 TailwindCSS for modern styling
- 🔍 Icons via `react-icons` & `heroicons`

## 🛠️ Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Font:** Custom `cormorant ` & RusillaSerif branding
- **Language:** TypeScript

## 📂 Folder Structure

ambika-pashmina/
├── client/ # Frontend (Next.js App Directory)
│ ├── public/ # Static assets (logo, fonts)
│ ├── src/app/ # App Router base
│ │ ├── components/ # UI components (Navbar, HeroSection, etc.)
│ │ ├── pages/ # Page routes (homepage.tsx, etc.)
│ │ ├── layout.tsx # App layout
│ │ └── page.tsx # Root page
│ └── tailwind.config.ts # Tailwind setup
└── .gitignore



## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
npm run build
npm start

Designed with minimalism and elegance in mind for luxury handmade products.

## Backend Progress
# PHASE 1
✨ Complete Authentication Module with JWT, Google OAuth, and Security Middleware

- Implemented full authentication flow:
  - Register, Login, Logout, Profile, Token Refresh
  - Change Password for logged-in users
  - Google OAuth 2.0 Login via Passport
- Added:
  - Secure JWT generation and cookie handling
  - Rate limiting, input validation, and error handling
  - Auth middleware and custom error class
  - MongoDB sanitization and secure headers
- Directory structure:
  - controllers, services, routes, middleware, validators, utils, config
- Tested endpoints via Postman for all use cases

🔐 Auth module is now complete and ready for frontend integration.
