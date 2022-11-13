import React, { Component } from "react";

interface ManagerProps {}

interface ManagerState {
  name: String;
  age: number;
  title: String;
}

export default class Manager extends Component<ManagerProps, ManagerState> {
  constructor(props: ManagerProps) {
    super(props);

    this.state = {
      name: "Harshit",
      age: 22,
      title: "Software Developer",
    } as ManagerState;
  }
  render() {
    const { name, age, title } = this.state;
    return (
      <>
        <h3 className="display-3">Manager</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
      </>
    );
  }
}
