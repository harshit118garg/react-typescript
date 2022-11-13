import React, { Component } from "react";

interface ClassPropTypes {
  name: String;
  age: number;
  title: String;
}

interface ClassStateTypes {}

export default class Saler extends Component<ClassPropTypes, ClassStateTypes> {
  constructor(props: ClassPropTypes) {
    super(props);
  }
  render() {
    const { name, age, title } = this.props;
    return (
      <>
        <h3 className="display-4">Saler</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
      </>
    );
  }
}
