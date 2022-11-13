import React, { useState } from "react";

interface GreetingState {
  msg: String;
}

interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = () => {
  const [state, setState] = useState<GreetingState>({
    msg: "Hello EveryOne",
  });

  const changeMsg = (greet: String): void => {
    setState({
      msg: greet,
    });
  };

  return (
    <>
      <h3 className="display-3">Greeting Component</h3>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <p className="h3 display-4 text-center">{state.msg}</p>
                  <div className="d-flex justify-content-evenly align-items-center">
                    <button
                      className="btn btn-sm btn-success mx-1"
                      onClick={() => changeMsg("GOOD MORNING")}
                    >
                      GOOD MORNING
                    </button>
                    <button
                      className="btn btn-sm btn-primary mx-1"
                      onClick={() => changeMsg("GOOD AFTERNOON")}
                    >
                      GOOD AFTERNOON
                    </button>
                    <button
                      className="btn btn-sm btn-danger mx-1"
                      onClick={() => changeMsg("GOOD EVENING")}
                    >
                      GOOD EVENING
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;
