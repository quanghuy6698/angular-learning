import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChangeDetectionPage } from "./change-detection.page";
import { CommonModule } from "@angular/common";
import { ChangeDetectionChildCmp } from "./change-detection-child/change-detection-child.cmp";

const routes = [
  {
    path: "",
    component: ChangeDetectionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [ChangeDetectionPage, ChangeDetectionChildCmp],
  exports: [ChangeDetectionPage],
})
export class ChangeDetectionModule {}
