import { Component } from "@angular/core";

const activeClass = "active";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";

  navLinks = [
    { uri: "/dashboard", label: "Dashboard", activeClass },
    { uri: "/heroes", label: "Heroes", activeClass },
  ];
}
