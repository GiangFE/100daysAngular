import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { AppRoutingModule } from "src/app/app-routing.module";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./welcome.component";

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzIconModule,
    NzMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    AppRoutingModule,
    WelcomeRoutingModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
