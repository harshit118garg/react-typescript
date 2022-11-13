import React, { useState } from "react";

interface COunterState {
  count: number;
}

interface COunterProps {}

const COunter: React.FC<COunterProps> = () => {
  const [state, setState] = useState<COunterState>({
    count: 0,
  });

  const increment = (): void => {
    setState({
      count: state.count + 1,
    });
  };

  const decrement = (): void => {
    setState({
      count: state.count - 1,
    });
  };

  return (
    <>
      <h3 className="display-3">Counter Component</h3>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="card-body">
                  <p className="h3 display-3 text-center">{state.count}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={increment}
                    >
                      INCR
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={decrement}
                    >
                      DECR
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

export default COunter;
