import React from "react";
import "./styles/App.scss";
import { AiTwotoneBook } from "react-icons/ai";
import COunter from "./components/COunter";
import Greeting from "./components/Greeting";
import Login from "./forms/Login";

function App() {
  return (
    <div className="App">
      <div className="container-fluid mt-3 p-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti quo sit fuga laudantium provident nemo totam, commodi
                dolor soluta maiores repudiandae numquam architecto id? Dolore
                deleniti est reiciendis voluptatum excepturi.
              </p>
              <button className="btn btn-success btn-sm">
                Read More <AiTwotoneBook />
              </button>
            </div>
          </div>
          <hr />
          {/* <div className="row">
            <div className="col">
              <COunter />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <Greeting />
            </div>
          </div> */}
          <div className="row">
            <div className="col">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
