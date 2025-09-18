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

app.post("/add-book", function (req, res) {
	const data = req.body;
	const newBook = {
		id: data.id,
		title: data.title,
		author: data.author,
		year: data.year,
	};
	books.push(newBook);
	res.status(201).json(newBook, { message: "New book added" });
});

app.get("/books/:id", function (req, res) {
	const bookId = parseInt(req.params.id);
	const book = books.find((b) => b.id === bookId);

	if (!book) {
		return res.status(404).json({ message: "Book not found" });
	}

	res.json(book);
});

app.put("/books/:id", function (req, res) {
	const bookId = parseInt(req.params.id);
	const updatedBookData = req.body;

	const book = books.find((b) => b.id === bookId);

	if (!book) {
		return res.status(404).json({ message: "Book not found" });
	}

	books.push(updatedBookData);
	res.status(200).json({ message: "Book updated successfully." });
});

app.delete("/books/:id", function (req, res) {
	const bookId = parseInt(req.params.id);
	const book = books.find((b) => b.id === bookId);

	if (!book) {
		return res.status(404).json({ message: "Book not found" });
	}

	books.splice(book[bookId]);
	res.status(204).json({ message: "Book deleted successfully." });
});

app.listen(8080);
