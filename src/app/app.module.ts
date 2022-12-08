import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContainerDirective } from './directives/view-container.directive';
import { InformationBannerComponent } from './modals/information-banner/information-banner.component';
import { SetInformationComponent } from './modals/set-information/set-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContainerDirective,
    InformationBannerComponent,
    SetInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
