This is a sample project and not a real app.

To run the program: `npm install && npm start`

### App Structure
```
Index
  App
    [routing, state of all books]
    passes Books to Main and Search
    Main:
      Bookshelf: list books
        Books: renders each Book
          Book:
            Categorizer: move/remove a book
    Search:
      Books:
        Book:
          Categorizer:
      [Actions]
        search booksApi
        update book category 
  ```
