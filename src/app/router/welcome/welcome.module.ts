import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { AppRoutingModule } from "src/app/app-routing.module";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./welcome.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    HttpClientModule,
    IconsProviderModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    AppRoutingModule,
    WelcomeRoutingModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
