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
    path: "css-bem",
    loadChildren: () => import("./pages/css-bem/css-bem.module").then((mdl) => mdl.CssBemModule),
  },
  {
    path: "change-detection",
    loadChildren: () => import("./pages/change-detection/change-detection.module").then((mdl) => mdl.ChangeDetectionModule),
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
