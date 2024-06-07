import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListBooksComponent from "./components/ListBooksComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <ListBooksComponent />
      <FooterComponent />
    </>
  );
}

export default App;
