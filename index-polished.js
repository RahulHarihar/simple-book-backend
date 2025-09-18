const express = require("express");
const app = express();
app.use(express.json());

var books = [
	{
		id: 1,
		title: "The Pragmatic Programmer",
		author: "Andrew Hunt",
		year: 1999,
	},
	{
		id: 2,
		title: "Java Programming",
		author: "Denis Ritchie",
		year: 1993,
	},
	{
		id: 3,
		title: "Python",
		author: "James Gosling",
		year: 1997,
	},
];

app.get("/books", function (req, res) {
	res.send(books);
});

//polished post route handler compared to old index.js
app.post("/books", (req, res) => {
	const data = req.body;
	const newBook = {
		id: books.length + 1,
		title: data.title,
		author: data.author,
		year: data.year,
	};
	books.push(newBook);
	res.status(201).json({ message: "New book added", book: newBook });
});

app.get("/books/:id", function (req, res) {
	const bookId = parseInt(req.params.id);
	const book = books.find((b) => b.id === bookId);

	if (!book) {
		return res.status(404).json({ message: "Book not found" });
	}

	res.json(book);
});

//polished put route handler compared to old index.js
app.put("/books/:id", (req, res) => {
	const bookId = parseInt(req.params.id);
	const book = books.find((b) => b.id === bookId);

	if (!book) return res.status(404).json({ message: "Book not found" });

	const data = req.body;
	book.title = data.title ?? book.title;
	book.author = data.author ?? book.author;
	book.year = data.year ?? book.year;

	res.json({ message: "Book updated successfully", book });
});

//polished delete route handler compared to old index.js
app.delete("/books/:id", (req, res) => {
	const bookId = parseInt(req.params.id);
	const index = books.findIndex((b) => b.id === bookId);

	if (index === -1) return res.status(404).json({ message: "Book not found" });

	books.splice(index, 1);
	res.json({ message: "Book deleted successfully" });
});

app.listen(8080);
