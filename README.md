# MyReads Project

This is project number 1 of the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

![Project Screenshot](./myreads.PNG)

MyReads is an app with two UI views. The main view displays books on three different shelves (currently reading, want to read, read). Here the end user can change the book to a different shelf or even remove the book from all shelves. Furthermore, the user can search for new books by clicking on the green add button, which opens a search view of the app. The user can enter a search query here, and the app will pull results using the [BooksAPI](./starter/src/BooksAPI.js). The user can then click on the green dropdown button to add or change the book's shelf (e.g., the user can change a book on the "Read" bookshelf to a different shelf.)

## Running the code

To get started developing right away:

- download (or fork and download) this repo by running `git clone https://github.com/malaktayeh/reactnd-project-myreads-starter` in your terminal
- install all project dependencies with `npm install`
- start the development server with `npm start`

You can also run in in the browser! Press `.` on this page or [here](https://github.dev/malaktayeh/reactnd-project-myreads-starter) to launch (:

## Requirements

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- A code editor (I use [VS Code](https://code.visualstudio.com/))

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.