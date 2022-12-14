import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './header-footer/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article/article-list-component/article-list.component';
import {AppRoutingModule} from "./app-routing-module/app-routing.module";
import { FilmListComponent } from './film/film-list/film-list.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { RecFilmCardComponent } from './film/rec-film-card/rec-film-card.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { HttpClientModule } from "@angular/common/http";
import { ArticleCreationComponent } from './article/article-creation/article-creation.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleListComponent,
    FilmListComponent,
    FooterComponent,
    RecFilmCardComponent,
    ArticleDetailComponent,
    ArticleCreationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RichTextEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
