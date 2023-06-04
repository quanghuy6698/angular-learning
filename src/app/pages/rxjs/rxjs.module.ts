import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RxjsPage } from "./rxjs.page";

const routes = [
  {
    path: "",
    component: RxjsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [RxjsPage],
  exports: [RxjsPage],
})
export class RxjsModule {}
