import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthorizationComponent,
    ArticleListComponent,
    NotFoundComponent,
    NewArticleComponent,
    ProfileComponent,
    NavComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
