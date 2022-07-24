import { Routes } from "@angular/router";
import { ErrorPage } from "./pages/error/error.page";

export const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then((mdl) => mdl.HomeModule),
  },
  {
    path: "rxjs",
    loadChildren: () => import("./pages/rxjs/rxjs.module").then((mdl) => mdl.RxjsModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "error",
    component: ErrorPage,
  },
  {
    path: "**",
    redirectTo: "/error",
  },
];
