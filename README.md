# 📝 Mongo DB Todos API

A simple, robust RESTful Todo API built using **Node.js**, **Express 5**, and **MongoDB / Mongoose** with ES Modules syntax.

---

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete todos.
- **MongoDB Atlas Integration**: Data persistence using Mongoose ODM with timestamps.
- **Modern ES Modules (`type: module`)**: Clean and modern `import`/`export` syntax.
- **Watch Mode Support**: Auto-restarts server on changes using Node's built-in `--watch` flag.
- **Structured Architecture**: Separation of concerns using `controllers`, `models`, `routes`, and `db` connection modules.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (v18+)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database ODM**: [Mongoose 9](https://mongoosejs.com/)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Project Structure

```text
mongo-db-todos/
├── controllers/
│   └── todo.controller.js   # Route handler functions (CRUD logic)
├── db/
│   └── index.js             # MongoDB connection logic
├── models/
│   └── todo.model.js        # Mongoose Schema & Model for Todo
├── routes/
│   └── route.todo.js        # Express route definitions
├── .env.example             # Example environment variables template
├── .gitignore               # Git ignored files & folders
├── index.js                 # App entry point & server setup
├── package.json             # Project metadata & dependencies
└── README.md                # Project documentation
```

---

## ⚙️ Getting Started

### 1. Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster or local MongoDB instance.

### 2. Installation

Clone this repository and navigate to the project directory:

```bash
git clone <repository-url>
cd "mongo db todos"
```

Install dependencies:

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (you can copy `.env.example`):

```bash
cp .env.example .env
```

Open `.env` and add your MongoDB connection string:

```env
MONGODBURL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### 4. Running the Server

Start the development server with live reload:

```bash
npm run dev
```

The server will start listening at:
```
http://localhost:7000/
```

---

## 🗄️ Todo Model Schema

| Field | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `title` | `String` | `true` | — | Title/description of the todo |
| `isComplete` | `Boolean` | `false` | `false` | Status whether todo is completed |
| `createdAt` | `Date` | auto | Current time | Timestamp when created |
| `updatedAt` | `Date` | auto | Current time | Timestamp when last updated |

---

## 📡 API Endpoints

**Base URL**: `http://localhost:7000/api/v1`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/todos` | Fetch all todos |
| `POST` | `/api/v1/todos` | Create a new todo |
| `PATCH` | `/api/v1/todos/:id` | Update an existing todo by ID |
| `DELETE` | `/api/v1/todos/:id` | Delete a todo by ID |

---

### Request & Response Examples

#### 1. Get All Todos
- **Endpoint**: `GET /api/v1/todos`
- **Response**: `200 OK`
```json
[
  {
    "_id": "6640c1e5a32b9c7d12345678",
    "title": "Complete CIT Assignment",
    "isComplete": false,
    "createdAt": "2026-05-12T10:00:00.000Z",
    "updatedAt": "2026-05-12T10:00:00.000Z",
    "__v": 0
  }
]
```

#### 2. Create a Todo
- **Endpoint**: `POST /api/v1/todos`
- **Request Body**:
```json
{
  "title": "Learn Node.js & Mongoose",
  "isComplete": false
}
```
- **Response**: `200 OK`
```json
{
  "_id": "6640c210a32b9c7d12345679",
  "title": "Learn Node.js & Mongoose",
  "isComplete": false,
  "createdAt": "2026-05-12T10:05:00.000Z",
  "updatedAt": "2026-05-12T10:05:00.000Z",
  "__v": 0
}
```

#### 3. Update a Todo
- **Endpoint**: `PATCH /api/v1/todos/:id`
- **Request Body**:
```json
{
  "title": "Learn Node.js & Mongoose (Updated)",
  "isComplete": true
}
```
- **Response**: `200 OK`
```json
{
  "message": "Updated Successfully. ID:6640c210a32b9c7d12345679",
  "updatedTodo": {
    "_id": "6640c210a32b9c7d12345679",
    "title": "Learn Node.js & Mongoose",
    "isComplete": false
  },
  "Old data": {
    "Title": "Learn Node.js & Mongoose",
    "Complete Status": false
  },
  "New Data": {
    "Title": "Learn Node.js & Mongoose (Updated)",
    "Complete Status": true
  },
  "timestamp": "2026-05-12T10:10:00.000Z"
}
```

#### 4. Delete a Todo
- **Endpoint**: `DELETE /api/v1/todos/:id`
- **Response**: `200 OK`
```json
{
  "message": "Deleted Successfully.",
  "deletedTodo": {
    "_id": "6640c210a32b9c7d12345679",
    "title": "Learn Node.js & Mongoose",
    "isComplete": false
  }
}
```

---

## 📜 License

ISC License.
