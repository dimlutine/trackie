import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="col"></div>
      <div className="col">
        <div className="row">
          <Header />
        </div>
        <div className="row mt-5">
          <Content />
        </div>
        <div className="row">
          <Footer />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
