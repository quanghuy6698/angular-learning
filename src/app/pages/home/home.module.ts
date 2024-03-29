import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.page";

const routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
