import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios.get("/books").then((res) => setBooks(res.data));
  };

  useEffect(getBooks, []);

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {books && (
          <Route path='/books' render={() => <BooksPage books={books} />} />
        )}
      </Switch>
    </div>
  );
}

export default App;
