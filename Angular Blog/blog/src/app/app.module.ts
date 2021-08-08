import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataService } from './services/data.service';
import { AuthorizationService } from './services/authorization.service';
import { NewArticleGuard }   from './new-article/newArticle.guard';
import { CommentComponent } from './comment/comment.component';

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
    AboutComponent,
    SearchComponent,
    WelcomeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, AuthorizationService, NewArticleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
