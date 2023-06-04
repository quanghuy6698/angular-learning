import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComp } from "../components/footer/footer.comp";
import { NavbarComp } from "../components/navbar/navbar.comp";

@NgModule({
  imports: [RouterModule, HttpClientModule],
  declarations: [NavbarComp, FooterComp],
  exports: [NavbarComp, FooterComp],
})
export class SharedModule {}
