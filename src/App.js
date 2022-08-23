import "./App.css";
import Header from "./components/header";
import NewsSection from "./components/newsSection";
import Footer from "./components/footer";
// import Spinner from "./components/spinner";

function App() {
  return (
    <div className="App">
      <Header />
      <NewsSection />
      {/* <Spinner /> */}
      <Footer />
    </div>
  );
}

export default App;
