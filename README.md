# 🍽️ My Recipe Manager App

A full CRUD single-page application (SPA) built with **React** and a **Firebase-hosted backend**. Users can add, view, update, and delete their favorite recipes.

## Technologies Used

- [React](https://reactjs.org/) (Frontend)
- [React Router](https://reactrouter.com/) (Routing)
- [Firebase Functions](https://firebase.google.com/docs/functions) (Backend API)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) (Frontend & backend deployment)
- [ESLint](https://eslint.org/) (Code linting)

## Features

- View all recipes
- Add a new recipe
- Delete a recipe
- Firebase Functions simulate a REST API backend
- Deployed frontend and backend

##  Project Structure
my-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── firebase-functions/
│   └── functions/
│       └── index.js
├── .eslintrc.js
├── .firebaserc
└── README.md

## 🔥 Firebase Setup

1. Initialize Firebase:
   ```bash
   firebase init
````

2. Choose:

   * **Functions**
   * **Hosting**

3. Write your API logic inside `firebase-functions/functions/index.js`

4. Deploy backend:

   ```bash
   cd firebase-functions
   firebase deploy --only functions
   ```

5. Deploy frontend:

   ```bash
   npm run build
   firebase deploy
   ```

## 🌐 Using the Backend in React

In your frontend code, use the deployed Firebase Functions URL:

```js
fetch("https://<your-cloud-function-url>/recipes")
```

To avoid `net::ERR_CONNECTION_REFUSED`, **do not use `localhost:4000`** after deployment.

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd my-app
npm install
```

## 🧪 Run Locally

```bash
npm start
```
## 🛠 Build & Deploy

```bash
npm run build
firebase deploy
```
## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

Built  by Naomi