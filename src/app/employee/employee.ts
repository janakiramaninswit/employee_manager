export class Employee {

  id: string;
  firstName: string;
  lastName: string;
  age: string;
  sex: string;

  constructor(code: string, firstName: string, lastName: string, age: string, sex: string) {
    this.id = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
  }

}
