# Frontend Angular - Project

Frontend developed with **Angular 20** for studying Spring Boot integration. Modern interface with authentication system and employee CRUD.

## 🚀 Features

- ✅ Login system with authentication
- ✅ Employee listing
- ✅ Employee registration
- ✅ Employee editing
- ✅ Employee deletion
- ✅ Multi-language support (PT-BR, EN-US, ES-AR)
- ✅ Light/dark theme

---

## 📋 Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 20+

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/igorpieralini/Project-FrontEnd.git
cd Project-FrontEnd
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment (optional)

The environment file is located at `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

---

## ▶️ Running the Project

### Development server:

```bash
npm start
# or
ng serve
```

Access: **http://localhost:4200**

### Production build:

```bash
ng build
```

Files will be generated in the `dist/` folder.

---

## 🏗️ Project Structure

```
Project-FrontEnd/
├── src/
│   ├── app/
│   │   ├── core/              # Guards, interceptors, core services
│   │   │   ├── guards/        # Auth guard and interceptor
│   │   │   └── layout/        # Layout, header, sidebar
│   │   ├── features/          # Feature modules
│   │   │   ├── funcionarios/  # Employee CRUD
│   │   │   └── login/         # Login screen
│   │   └── services/          # Global services (theme, language)
│   ├── assets/
│   │   └── i18n/              # Translation files
│   ├── environments/          # Environment settings
│   └── styles/                # Global styles and themes
├── package.json
└── README.md
```

---

## 🔗 Backend

The corresponding Spring Boot backend is available at:
[Project-Backend](https://github.com/igorpieralini/Project-Backend)

**⚠️ The backend must be running at `http://localhost:8080` for the application to work properly.**

---

## 👨‍💻 Developer

**Igor Pieralini**

- GitHub: [@igorpieralini](https://github.com/igorpieralini)
