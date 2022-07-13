import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {"-->"}
            <li>
              <Link to="/sample">Another page</Link>
            </li>
            {"---->"}
            <li>
              <Link to="/sample/nested">Nested page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/sample" component={AnotherPage} />
          <Route path="/sample/nested" component={NestedPage} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = (props) => <div>Home</div>;
const AnotherPage = (props) => <div>Another page</div>;
const NestedPage = (props) => <div>Nested page</div>;
export default App;
