# E-Commerce Site — Frontend

This folder contains the React storefront for the E-Commerce Site project. It is built with React, Vite, Tailwind CSS, React Router, and Axios.

## Current UI

The home page is composed of reusable sections:

- Navbar and hero section
- Category bar and category carousel
- Accessories section
- Footwear section
- Footer

The app currently defines these routes:

| Route | Page | Status |
| --- | --- | --- |
| `/` | Home | Storefront UI |
| `/sign-up` | Sign up | Connected to the backend signup endpoint |
| `/login` | Login | Placeholder |
| `/Products/:id` | Product details | Placeholder |

## Run Locally

From this directory:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Other Commands

```bash
npm run build
npm run preview
npm run lint
```

## API Configuration

The Axios client is configured in `src/API/axios.js` with this base URL:

```
http://localhost:5000/api
```

Start the backend separately from the repository's `Backend/` directory. See the [main project README](../README.md) for backend setup and API details.

## Main Dependencies

- React and React DOM
- React Router
- Tailwind CSS
- Axios
- Vite

---

Part of [Misam Shaban's E-Commerce Site](https://github.com/Misam-Shaban/E-Commerce-Site).
