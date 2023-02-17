import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    // local para declaração dos components, é necessário importalos
    ReplacePipe,
    AppComponent,
    CourseListComponent,
    StarComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    // local de importação de módulos
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot módulo de rotas do angular
    // .forRoot espera um array de objetos que serão as rotas da aplicação
    RouterModule.forRoot([
      // rota raiz
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent 
      },
      // rota de 'erro' ou seja usada em qualquer rota que não exista
      {
        path: '**', component: Error404Component 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
