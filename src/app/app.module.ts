import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.comp";
import { ErrorPage } from "./pages/error/error.page";
import { HomeModule } from "./pages/home/home.module";
import { RxjsModule } from "./pages/rxjs/rxjs.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, ErrorPage],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule, RxjsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
