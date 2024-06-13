/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getBook, saveBook, updateBook } from "../services/BookService";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategories } from "../services/CategoryService";
import { Form } from "react-router-dom";

const BookComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [cover, setCover] = useState("");
  const [pages, setPages] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  const maxChars = 255; // Maximum character limit

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function saveOrUpdateBook(e) {
    e.preventDefault();

    const book = { cover, title, description, pages, isbn, categoryId };
    console.log(book);

    if (id) {
      updateBook(id, book)
        .then((response) => {
          navigate("/books");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      saveBook(book)
        .then((response) => {
          console.log(response.data);
          navigate("/books");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return (
        <h2 className="text-center" style={{ marginTop: "10px" }}>
          Update Book
        </h2>
      );
    } else {
      return (
        <h2 className="text-center" style={{ marginTop: "10px" }}>
          Add Book
        </h2>
      );
    }
  }

  useEffect(() => {
    if (id) {
      getBook(id)
        .then((response) => {
          console.log(response.data);
          setCover(response.data.cover);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setPages(response.data.pages);
          setIsbn(response.data.isbn);
          setCategoryId(response.data.categoryId);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const getColor = () => {
    if (description.length > maxChars) {
      return "red"; // Color for exceeding character limit
    } else if (description.length >= maxChars - 10) {
      return "orange"; // Color for nearing character limit
    } else {
      return "black"; // Default color
    }
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3  offset-md-3">
          {/* <h2 className="text-center" style={{ marginTop: "10px" }}>
            Add Book
          </h2> */}
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Book Cover:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Cover URL"
                  name="cover"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                ></input>
                {cover && (
                  <div className="mt-2">
                    <img
                      src={cover}
                      alt="Book Cover"
                      style={{ maxWidth: "auto", height: "100px" }}
                    />
                  </div>
                )}
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
                <textarea
                  type="texarea"
                  className="form-control"
                  placeholder="Enter Book Description"
                  rows={4}
                  name="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  maxLength={maxChars + 10} // Allowing a bit more for visual feedback
                  // onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="text-muted mt-1" style={{ color: getColor() }}>
                  Character Count: {description.length}/{maxChars}
                </div>
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

              <div className="form-group mb-2">
                <label className="form-label">Select Category:</label>
                <select
                  className="form-control"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="Select Category">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {" "}
                      {category.categoryName}{" "}
                    </option>
                  ))}
                </select>
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
