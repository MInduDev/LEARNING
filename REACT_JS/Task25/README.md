# M Indu_Task25 — React Shoe Store

A beginner-friendly React shoe store project built with Vite and the React `useState` hook.

## Run the project

1. Install Node.js if it is not already installed.
2. Open this project folder in VS Code.
3. Open the terminal in VS Code.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually http://localhost:5173).

## Features

- Displays eight shoes with name, price and image.
- Add a shoe to the cart.
- Adding the same shoe again increases its quantity.
- Plus and minus buttons update quantity.
- Removing the last quantity removes the shoe from the cart.
- Cart total updates automatically.

## Project Structure

Task25/
│
├── public/
│   └── images/
│       ├── shoe1.png
│       ├── shoe2.png
│       ├── ...
│       └── shoe8.png
│
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md

## Open the local URL displayed in your terminal 
(usually http://localhost:5173).

## Cart Functionality

- The project uses React's useState hook to manage shopping cart data.
- addToCart() – Adds a shoe to the cart.
- increaseQuantity() – Increases product quantity.
- decreaseQuantity() – Decreases quantity and removes the product when it reaches zero.

## Learning Objective

- This project was created to practice React components, props, event handling, array methods, and state management using the useState hook.

## Note about images

Product photos are loaded from Unsplash URLs, so an internet connection is required to display them.
