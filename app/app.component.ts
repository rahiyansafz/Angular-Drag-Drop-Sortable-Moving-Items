import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent
{
  /** Drag enable. */
  public dragOperation:boolean = false;
  /** Array of containers. */
  public containers: Array<Container> = [
    new Container(1, "Container 1", [new Widget("1"), new Widget("2")]),
    new Container(2, "Container 2", [new Widget("3"), new Widget("4")]),
    new Container(3, "Container 3", [new Widget("5"), new Widget("6")])
  ];
  /** Array of widgets. */
  widgets: Array<Widget> = [];

  /**
   * Add an item into widgets array.
   */
  public addTo($event:any):void
  {
    if($event)
    {
      this.widgets.push($event.dragData);
    }
  }
}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

class Widget {
  constructor(public name: string) {}
}
