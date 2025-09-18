# 📚 Express.js CRUD Practice – Books API

## Objective
Build a simple **Express.js backend CRUD API** to manage a list of **Books**.

---

## Book Model
Each book should have the following fields:
- `id` (unique number)
- `title` (string)
- `author` (string)
- `year` (number)

---

## API Endpoints

1. **POST** `/books`  
   - Add a new book.  

2. **GET** `/books`  
   - Get all books.  

3. **GET** `/books/:id`  
   - Get a single book by `id`.  

4. **PUT** `/books/:id`  
   - Update a book by `id`.  

5. **DELETE** `/books/:id`  
   - Remove a book by `id`.  

---

## Requirements
- Use **Express.js**.
- Store data in an **in-memory array** (no database needed).
- Return JSON responses with appropriate status codes.

---

## Example
### Request:
```http
POST /books
Content-Type: application/json

{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "year": 1999
}
{
  "id": 1,
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "year": 1999
}

```

