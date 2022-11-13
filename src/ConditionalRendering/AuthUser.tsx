import React, { useState } from "react";

interface AuthUserState {
  isLoggedIn: boolean;
}

interface AuthUSerProps {}

const AuthUser: React.FC<AuthUSerProps> = () => {
  const [state, setState] = useState<AuthUserState>({
    isLoggedIn: false,
  });

  const login = (): void => {
    setState({
      isLoggedIn: true,
    });
  };

  const logOut = (): void => {
    setState({
      isLoggedIn: false,
    });
  };
  return (
    <>
      <h3 className="display-3">Auth User</h3>
      <div className="container-fluid">
        <div className="grid">
          <div className="row">
            <div className="col">
              <div className="border-2 p-4 rounded-2 bg-light shadow-lg d-flex justify-content-center align-items-center flex-column">
                {state.isLoggedIn ? (
                  <div>
                    <p className="h3 text-bg-success p-3">Welcome User!</p>
                    <p className="text-bg-warning p-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cum pariatur eligendi reiciendis ipsum quaerat maiores
                      aspernatur, natus nihil dolorem ex quas blanditiis unde
                      consectetur modi consequuntur veniam, deserunt laudantium
                      non!
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="h3 text-bg-danger p-3">Thank You!</p>
                    <p className="text-bg-warning p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt ad sapiente voluptates modi dignissimos nam.
                    </p>
                  </div>
                )}
                <div className="w-100 d-flex justify-content-evenly">
                  {!state.isLoggedIn ? (
                    <button className="btn btn-primary btn-sm" onClick={login}>
                      Login
                    </button>
                  ) : (
                    <button className="btn btn-warning btn-sm" onClick={logOut}>
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthUser;
