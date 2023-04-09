import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BindingExComponent } from './binding-ex/binding-ex.component';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DirrectiveExComponent } from './dirrective-ex/dirrective-ex.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'binding', pathMatch: 'full'},
  {path:'binding', component:BindingExComponent},
  {path:'directive', component: DirrectiveExComponent},
  {path: 'parentchild', component: ParentChildComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    DirrectiveExComponent,
    ParentChildComponent,
    PipesComponent,
    RoutingExampleComponent
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
