import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BindingExComponent } from './binding-ex/binding-ex.component';

import { ErrorPageComponent } from './error-page/error-page.component';
import { DirrectiveExComponent } from './dirrective-ex/dirrective-ex.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import {ParentoneComponent} from './childtoparent/parentone/parentone.component';
import { ChildoneComponent} from './childtoparent/childone/childone.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'binding', pathMatch: 'full'},
  {path:'binding', component:BindingExComponent},
  {path:'directive', component: DirrectiveExComponent},
  {path: 'parentchild', component: ParentChildComponent},
  {path:'childparent', component: ChildtoparentComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    DirrectiveExComponent,
    ParentChildComponent,
    PipesComponent,
    RoutingExampleComponent,
    ParentComponent,
    ChildComponent,
    ChildtoparentComponent,
    ParentoneComponent,
    ChildoneComponent
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
