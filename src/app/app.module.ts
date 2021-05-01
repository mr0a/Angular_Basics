import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScriptAddComponent } from './script-add/script-add.component';
import { ScriptEditComponent } from './script-edit/script-edit.component';
import { ScriptGetComponent } from './script-get/script-get.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ScriptAddComponent,
    ScriptEditComponent,
    ScriptGetComponent,
    LoginComponent,
    HomeComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
