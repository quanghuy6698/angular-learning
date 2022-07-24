import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.page";

const homeRoutes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
