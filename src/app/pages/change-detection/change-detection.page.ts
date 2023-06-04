import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "change-detection-page",
  templateUrl: "./change-detection.page.html",
  styleUrls: ["./change-detection.page.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionPage {
  arrEl = [
    { name: "Tony", age: "58" },
    { name: "Tony2", age: "59" },
    { name: "Tony3", age: "57" },
  ];

  trackDetection(): void {
    this.arrEl[0].name = "Hack";
  }
}
