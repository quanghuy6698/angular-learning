import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CssBemPage } from "./css-bem.page";

const routes = [
  {
    path: "",
    component: CssBemPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [CssBemPage],
  exports: [CssBemPage],
})
export class CssBemModule {}
