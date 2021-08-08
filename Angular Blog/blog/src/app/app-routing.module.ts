import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleComponent } from './article/article.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewArticleGuard } from './new-article/newArticle.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent},
  { path: 'articles', component: ArticleListComponent},
  { path: 'activityfeed', component: ArticleListComponent},
  { path: 'login', component: AuthorizationComponent},
  { path: 'article/new', component: NewArticleComponent, pathMatch:'full', canActivate: [NewArticleGuard]},
  { path: 'articles/:id', component: ArticleComponent, pathMatch:'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
