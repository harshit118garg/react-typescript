import React, { useState } from "react";

interface EmployeeProps {}

interface EmployeeState {
  name: String;
  age: number;
  title: String;
}

const Employee: React.FC<EmployeeProps> = () => {
  const [state, setState] = useState<EmployeeState>({
    name: "",
    age: 0,
    title: "",
  });

  const {name, age, title} = state;
  return (
    <>
      <h3 className="display-3">Employee</h3>
      <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
    </>
  );
};

export default Employee;
