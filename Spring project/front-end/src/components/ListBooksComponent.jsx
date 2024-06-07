import { useEffect, useState } from "react";
import { getAllBooks } from "../services/BookService";

const ListBooksComponent = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <div className="container">
      <br /> <br />
      <h2 className="text-center"> List of Books</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Book Cover </th>
              <th>Book Title </th>
              <th>Book Description </th>
              <th>Number of Pages </th>
              <th>Book ISBN </th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBooksComponent;
