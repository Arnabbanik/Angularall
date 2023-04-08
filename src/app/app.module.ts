import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BindingExComponent } from './binding-ex/binding-ex.component';
import { FormsModule } from '@angular/forms';

const appRoute: Routes = [
  {path: '', redirectTo: 'binding', pathMatch: 'full'},
  {path:'binding', component:BindingExComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
