import { User } from "../UserList";

export class UserService {
  private static users: User[] = [
    {
      sno: "aaa101",
      name: "Harshit",
      age: 22,
      designation: "FE Sr. Analyst",
      company: "ABC",
    },
    {
      sno: "aaa102",
      name: "Sagar",
      age: 28,
      designation: "FE Sr. Manager",
      company: "ABC",
    },
    {
      sno: "aaa103",
      name: "Aparna",
      age: 25,
      designation: "FE Analyst",
      company: "TCS",
    },
    {
      sno: "aaa104",
      name: "Anjali",
      age: 24,
      designation: "FE Analyst",
      company: "DEF",
    },
  ];

  public static getAllUsers () {
    return this.users
  }
}
