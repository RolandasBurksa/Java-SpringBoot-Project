/* eslint-disable react/prop-types */
import "./App.css";
import BookComponent from "./components/BookComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListBooksComponent from "./components/ListBooksComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ListCategoryComponent from "./components/ListCategoryComponent";
import CategoryComponent from "./components/CategoryComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import { isUserLoggedIn } from "./services/AuthService";

function App() {
  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }

    return <Navigate to="/" />;
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:8000 */}
          {/* <Route path="/" element={<ListBooksComponent />}></Route> */}
          <Route path="/" element={<LoginComponent />}></Route>
          {/* // http://localhost:8000/books */}
          <Route
            path="/books"
            element={
              <AuthenticatedRoute>
                <ListBooksComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          {/* // http://localhost:8000/add-book */}
          <Route
            path="/add-book"
            element={
              <AuthenticatedRoute>
                <BookComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          {/* // http://localhost:8000/update-book/1 */}
          <Route
            path="/update-book/:id"
            element={
              <AuthenticatedRoute>
                <BookComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          {/* // http://localhost:8000/categpries */}
          <Route
            path="/categories"
            element={
              <AuthenticatedRoute>
                <ListCategoryComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          {/* // http://localhost:8000/add-category */}
          <Route
            path="/add-category"
            element={
              <AuthenticatedRoute>
                <CategoryComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          {/* // http://localhost:8000/edit-category/1 */}
          <Route
            path="/edit-category/:id"
            element={
              <AuthenticatedRoute>
                <CategoryComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          {/* // http://localhost:8000/register */}
          <Route path="/register" element={<RegisterComponent />}></Route>
          {/* // http://localhost:8000/login */}
          <Route path="/login" element={<LoginComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
