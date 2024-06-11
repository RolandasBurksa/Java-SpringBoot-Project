import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  // const navigate = useNavigate();

  // function addNewBook() {
  //   navigate("/add-book");
  // }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div>
            <a
              href="http://localhost:3000"
              className="navbar-brand"
              style={{ paddingLeft: "20px" }}
            >
              Book recommendations online Application
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  Books
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Categories
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </ul>
          </div> */}

          <ul className="navbar-nav">
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>

          {/* <button
            className="btn btn-outline-light mb-2"
            style={{ marginTop: "10px", marginLeft: "20px" }}
            onClick={addNewBook}
          >
            Add Book
          </button> */}
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
