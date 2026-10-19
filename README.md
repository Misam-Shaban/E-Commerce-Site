# E-Commerce Site

A full-stack e-commerce project with a React storefront and an Express API backed by MongoDB. The project is under development.

## Tech stack

- **Frontend:** React, Vite, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Authentication support:** bcrypt password hashing

## Project structure

```text
E-Store/
├── Backend/
│   ├── config/          # MongoDB connection
│   ├── Controller/      # API controllers
│   ├── Modles/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Express entry point
├── frontend/
│   └── src/
│       ├── API/         # Axios client
│       ├── components/  # Shared UI components
│       └── Pages/       # Storefront pages
└── README.md
```

## Prerequisites

- Node.js and npm
- A MongoDB connection string

## Setup

### 1. Configure the backend

Open a terminal in `Backend/`, install dependencies, then create a `.env` file:

```powershell
cd Backend
npm install
```

Add your MongoDB connection string to `Backend/.env`:

```env
MONGO_URL=mongodb://127.0.0.1:27017/ecommerce
PORT=5000
```

Use your own MongoDB URI if your database is hosted remotely. Keep `.env` private and do not commit database credentials.

Start the API:

```powershell
node server.js
```

The API uses port `5000` by default, or the port set in `PORT`. The root endpoint is `http://localhost:5000/`.

### 2. Start the frontend

In a separate terminal, install dependencies and run the Vite development server:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The frontend Axios client currently targets `http://localhost:5000/api`.

## Available frontend commands

Run these commands from `frontend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `frontend/dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Routes and API

### Frontend routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/login` | Login |
| `/sign-up` | Sign up |
| `/Products/:id` | Product details |

### Backend endpoint

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/auth/signup` | Register a user with `name`, `email`, and `password` |

Example request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "your-password"
}
```

The backend hashes passwords before storing user records in MongoDB.

## Development notes

- Run the backend and frontend in separate terminals.
- The frontend API base URL is currently set in `frontend/src/API/axios.js`.
- The backend currently exposes signup and a root health-check response; other storefront functionality is still in progress.
