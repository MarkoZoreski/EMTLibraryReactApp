import axios from '../custom-axios/axios';

const LibraryService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories() {
        return axios.get("/books/categories");
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    addBook: (book)  => {
        return axios.post("/books/add", book);
    },
    editBook: (id,book)  => {
        return axios.put(`/books/edit/${id}`, book);
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    markAsTaken: (id) => {
        return axios.put(`books/markAsTaken/${id}`);
    },
}
export default LibraryService;