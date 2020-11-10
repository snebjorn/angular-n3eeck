import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "test",
  template: "",
})
export class TestComponent<T> {
  @Input() myData: T[] = [];
  @Output() out = new EventEmitter<T[]>();

  public data: T[] = [];
}
