import React, { useState } from "react";

interface User {
  username: string;
  password: string;
}

interface LoginState {
  user: User;
  show: boolean;
}

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [state, setState] = useState<LoginState>({
    user: {
      username: "",
      password: "",
    },
    show: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
      show: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setState({
      ...state,
      show: true,
    });
    console.log(state.user);
  };

  return (
    <>
      <h3 className="display-3">Login</h3>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center bg-primary text-white">
                  <p className="h4">Login Here</p>
                </div>
                <div className="card-body bg-success bg-opacity-50">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="username"
                        value={state?.user?.username}
                        type="text"
                        placeholder="UserName"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="password"
                        value={state?.user?.password}
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <button className="btn btn-warning" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {state?.show && (
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item">{state?.user?.username}</li>
                  <li className="list-group-item">{state?.user?.password}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
