import "./App.css";
import BookComponent from "./components/BookComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListBooksComponent from "./components/ListBooksComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:8000 */}
          <Route path="/" element={<ListBooksComponent />}></Route>
          {/* // http://localhost:8000/books */}
          <Route path="/books" element={<ListBooksComponent />}></Route>
          {/* // http://localhost:8000/add-book */}
          <Route path="/add-book" element={<BookComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
