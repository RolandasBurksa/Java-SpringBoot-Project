/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { deleteBook, getAllBooks } from "../services/BookService";
import { useNavigate } from "react-router-dom";

const ListBooksComponent = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listBooks();
  }, []);

  function listBooks() {
    getAllBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewBook() {
    navigate("/add-book");
  }

  function updateBook(id) {
    console.log(id);
    navigate(`/update-book/${id}`);
  }

  function removeBook(id) {
    deleteBook(id)
      .then((response) => {
        listBooks();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="backgroundContainer">
      <div className="container">
        <br /> <br />
        <h2 className="text-center"> List of Books</h2>
        <button className="btn btn-primary mb-2" onClick={addNewBook}>
          Add Book
        </button>
        <div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Book Cover </th>
                <th>Book Title </th>
                <th>Book Description </th>
                <th>Number of Pages </th>
                <th>Book ISBN </th>
                <th>Actions </th>
                {/* <th>Book Category </th> */}
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.cover}</td>
                  <td>{book.title}</td>
                  <td>{book.description}</td>
                  <td>{book.pages}</td>
                  {/* <td>{book.bookCategory}</td> */}
                  <td>{book.isbn}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => updateBook(book.id)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => removeBook(book.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBooksComponent;
