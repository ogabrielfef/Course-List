import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    // local para declaração dos components, é necessário importalos
    AppComponent,
    // Error404Component,
  ],
  imports: [
    // local de importação de módulos
    BrowserModule,
    // HttpClientModule é o módulo para fazer requisição via http
    HttpClientModule,
    CourseModule,
    CoreModule,
    // RouterModule.forRoot módulo de rotas do angular
    // .forRoot espera um array de objetos que serão as rotas da aplicação
    RouterModule.forRoot([
      // rota raiz
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
