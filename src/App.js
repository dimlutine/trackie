import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./App.css";
import All from "./Pages/All";
import Archive from "./Pages/Archive";
import Home from "./Pages/Home";
import Kanban from "./Pages/Kanban";
import Profile from "./Pages/Profile";
import Top from "./Pages/Top";
import Footer from "./Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="container white">
        <div className="col "></div>
        <div className="col ">
          <div className="row">
            <Navbar />
          </div>
          <div className="row mt-5 ">
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col"></div>

                <div className="col-10" style={{ margin: "2em" }}>
                  <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/top" element={<Top />}></Route>
                    <Route path="/all" element={<All />}></Route>
                    <Route path="/archive" element={<Archive />}></Route>
                    <Route path="/kanban" element={<Kanban />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                  </Routes>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
