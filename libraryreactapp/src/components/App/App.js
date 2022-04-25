import './App.css';
import React from "react";
import {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LibraryService from "../../repository/libraryRepository";
import Books from "../Book/BookList/books";
import BookAdd from "../Book/BookAdd/bookAdd";
import BookEdit from "../Book/BookEdit/bookEdit";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: [],
      authors: [],
      BookToEdit: {},
      countries: []
    }
  }

  render() {
    return (
        <Router>
            <main>
          <Routes>
            <Route path={"/books"} exact element={
              <Books books={this.state.books}
                     onDelete={this.deleteBook}
                     onEdit={this.getBook}
                     onMarkAsTaken={this.markAsTaken}/>
            }/>
            <Route path={"/books/add"} exact element={
              <BookAdd categories={this.state.categories}
                       authors={this.state.authors}
                       onAddBook={this.addBook}/>}/>

            <Route path={"/books/edit/:id"} exact element={
              <BookEdit categories={this.state.categories}
                        authors={this.state.authors}
                        onEditBook={this.editBook}
                        book={this.state.BookToEdit}/>}/>
          </Routes>
        </main>
        </Router>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

    fetchData = () => {
        this.loadCountries();
        this.loadAuthors();
        this.loadCategories();
        this.loadBooks();
    }
  loadCategories = () =>{
      LibraryService.fetchCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          });
        });
  }
  loadBooks = () => {
      LibraryService.fetchBooks()
        .then((data) => {
          this.setState({
            books: data.data
          });
        });
  }
  loadAuthors = () => {
      LibraryService.fetchAuthors()
        .then((data) => {
          this.setState({
            authors: data.data
          });
        });
  }
  loadCountries = () => {
      LibraryService.fetchCountries()
        .then((data) => {
          this.setState({
            countries: data.data
          });
        });
  }
    addBook = (name, category, authorId, availableCopies) => {
        const newbook = {name: name, category: category, authorId: authorId, availableCopies: availableCopies};
        LibraryService.addBook(newbook)
            .then(() => {
                this.loadBooks();
            });
    }
  deleteBook = (id) => {
      LibraryService.deleteBook(id)
        .then(() => {
          this.loadBooks();
        });
  }
  editBook = (id, name, category, authorId, availableCopies) => {
      LibraryService.editBook(id, name, category, authorId, availableCopies)
        .then(() => this.loadBooks());
  }
  getBook = (id) => {
      LibraryService.getBook(id)
        .then((data) => this.setState({BookToEdit: data.data}))
  }
  markAsTaken = (id) => {
      LibraryService.markAsTaken(id)
        .then(() => {
          this.loadBooks()
        });
  }
}


export default App;