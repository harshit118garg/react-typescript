import React from "react";
import "./styles/App.scss";
import { AiTwotoneBook } from "react-icons/ai";
import Customer from "./components/Customer";
import Saler from "./components/Saler";
import Employee from "./components/Employee";
import Manager from "./components/Manager";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
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
          <div className="row">
            <div className="col">
              <Customer name={"Harshit"} age={22} title={"FE Developer"} />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <Saler name={"Pawan"} age={51} title={"Business Man"} />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <Employee />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <Manager />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
