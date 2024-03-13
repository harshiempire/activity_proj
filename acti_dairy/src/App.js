import "./App.css";
import { Routes, Route, Router, Link } from "react-router-dom";
import New from "./pages/New";
import Activities from "./pages/Activities";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
        <a class="navbar-brand" href="#">
          <h3>Hi</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to={"/"}>
                Activities
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/new"}>
                New
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Activities />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
