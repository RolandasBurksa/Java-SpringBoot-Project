import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  function addNewBook() {
    navigate("/add-book");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <div>
            <a
              href="http://localhost:3000"
              className="navbar-brand"
              style={{ paddingLeft: "20px" }}
            >
              Book recommendations online Application
            </a>
          </div>

          <button
            className="btn btn-outline-light mb-2"
            style={{ marginTop: "10px", marginLeft: "20px" }}
            onClick={addNewBook}
          >
            Add Book
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
