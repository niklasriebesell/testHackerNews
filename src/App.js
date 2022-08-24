import "./App.css";
import Header from "./components/header";
import NewsSection from "./components/newsSection";
import Footer from "./components/footer";
import { useState } from "react";

// import Spinner from "./components/spinner";

function App() {
  const [query, setQuery] = useState("");
  function handleInput(Input) {
    setQuery(Input);
  }
  console.log(query);
  return (
    <div className="App">
      <Header />
      <NewsSection userInput={query} />
      <Footer handleInput={handleInput} />
    </div>
  );
}

export default App;
