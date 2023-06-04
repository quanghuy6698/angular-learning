import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "change-detection-child-cmp",
  templateUrl: "./change-detection-child.cmp.html",
  styleUrls: ["./change-detection-child.cmp.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionChildCmp {
  @Input("arrEl") arrEl: any;
}
