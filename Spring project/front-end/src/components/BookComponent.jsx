// import React from "react";
import { useState } from "react";
import { saveBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";

const BookComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [cover, setCover] = useState("");
  const [pages, setPages] = useState("");
  const navigate = useNavigate();

  function saveOrUpdateBook(e) {
    e.preventDefault();

    const book = { cover, title, description, pages, isbn };
    console.log(book);

    saveBook(book)
      .then((response) => {
        console.log(response.data);
        navigate("/books");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3  offset-md-3">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            Add Book
          </h2>
          {/* {pageTitle()} */}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Book Cover:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Cover"
                  name="cover"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Book Title:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Book Description:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Book Pages:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Pages"
                  name="pages"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Book ISBN:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book ISBN"
                  name="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                ></input>
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateBook(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
