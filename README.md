# 🛠️ Express.js CRUD API

A simple and lightweight RESTful API built with **Express.js** to perform **CRUD operations** (Create, Read, Update, Delete). This can serve as a boilerplate or starter for backend development using Node.js and Express.

---

## 🚀 Features

- Create a brew Coffee in JSON array of object as item
- Read all brew Coffee or a single item
- Update an existing Coffee with id
- Delete an Coffee by ID
- Uses in-memory storage (no database) for simplicity
- Modular file structure for easy scaling

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/) (for development)

---

## 📬 API Endpoints
```
http://localhost:8000/brews
```

## 📦 Sample JSON Body
```
{
  "name": "Latte",
  "price": "$20"
}
```

## ⚠️ Note


- This API uses in-memory data and will reset on server restart. You can integrate MongoDB, PostgreSQL, or any other DB for persistence.

## 🙌 Contributing

- Pull requests and issues are welcome! Fork the repo and start coding 🚀

```
Let me know if you want:
- A version of this for MongoDB with Mongoose
- Environment variable support with `.env`
- Docker support instructions in the README

I can generate a matching codebase scaffold too if needed.
```