import { useState } from "react";

const ListBooksComponent = () => {
  const dummyData = [
    {
      id: 1,
      bookTitle: "Learn Java",
      bookDescription: "Funny book about java coding",
      bookISBN: "098765",
      bookCover: "",
      numberOfPages: "325",
      bookCategory: "Fiction",
    },
    {
      id: 2,
      bookTitle: "Learn to Dance",
      bookDescription: "A book about dance styles",
      bookISBN: "135792",
      bookCover: "",
      numberOfPages: "100",
      bookCategory: "Free time",
    },
    {
      id: 3,
      bookTitle: "Learn Agile",
      bookDescription: "Funny book about Agile",
      bookISBN: "12345",
      bookCover: "",
      numberOfPages: "125",
      bookCategory: "Science",
    },
  ];

  const [books, setBooks] = useState(dummyData);

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
              <th>Book Category </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.bookCover}</td>
                <td>{book.bookTitle}</td>
                <td>{book.bookDescription}</td>
                <td>{book.numberOfPages}</td>
                <td>{book.bookCategory}</td>
                <td>{book.bookISBN}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBooksComponent;
