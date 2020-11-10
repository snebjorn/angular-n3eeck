import { Component } from "@angular/core";

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: "nz-demo-table-basic",
  templateUrl: "./app.component.html",
})
export class NzDemoTableBasicComponent {
  listOfPeople: Person[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  singlePerson: Person = {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  };

  listOfStrings: string[] = ["a", "b", "c"];

  doStuff(obj: string) {}
}
