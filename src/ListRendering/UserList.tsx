import React, { useState } from "react";
import { UserService } from "./services/users";

export interface User {
  sno: string;
  name: string;
  age: number;
  designation: string;
  company: string;
}

interface UserListProps {}

interface UserListState {
  users: User[];
}

const UserList: React.FC<UserListProps> = () => {
  const [state, setState] = useState<UserListState>({
    users: UserService.getAllUsers(),
  });
  return (
    <>
      <h3 className="display-3">User List Rendering</h3>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <table className="table table-bordered border-white shadow-lg text-bg-success">
                <thead className="text-bg-dark">
                  <tr>
                    <th>Sno.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>
                  {state.users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <th>{user.sno}</th>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.designation}</td>
                        <td>{user.company}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
