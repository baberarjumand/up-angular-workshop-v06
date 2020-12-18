import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { CustomHeadingComponent } from './shared/components/custom-heading/custom-heading.component';
import { HeaderNavbarComponent } from './shared/components/header-navbar/header-navbar.component';
import { DisplayUserDataComponent } from './shared/components/display-user-data/display-user-data.component';
import { UserDataFormComponent } from './shared/components/user-data-form/user-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    CustomHeadingComponent,
    HeaderNavbarComponent,
    DisplayUserDataComponent,
    UserDataFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
