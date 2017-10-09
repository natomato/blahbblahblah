This is a sample project and not a real app.

To run the program: `npm install && npm start`

### App Structure
```
Index
  App
    routing
    owns state of Books
    calls update and getAll
    Main:
      Bookshelf: list books
        Books: renders each Book
          Book: adds book.id to changeShelf call
            Categorizer: calls changeShelf with users selection
    Search:
      Books:
        Book:
          Categorizer:
      [Actions]
        search booksApi
  ```
