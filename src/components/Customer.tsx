import React from "react";

interface PropsTypes {
  name: String;
  age: number;
  title: String;
}

const Customer: React.FC<PropsTypes> = ({ name, age, title }) => {
  return (
    <>
      <h3 className="display-3">Customer</h3>
      <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Age: {age}</li>
        <li className="list-group-item">Title: {title}</li>
      </ul>
    </>
  );
};

export default Customer;
