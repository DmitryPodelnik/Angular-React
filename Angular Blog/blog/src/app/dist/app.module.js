"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var article_component_1 = require("./article/article.component");
var authorization_component_1 = require("./authorization/authorization.component");
var article_list_component_1 = require("./article-list/article-list.component");
var not_found_component_1 = require("./not-found/not-found.component");
var new_article_component_1 = require("./new-article/new-article.component");
var profile_component_1 = require("./profile/profile.component");
var nav_component_1 = require("./nav/nav.component");
var routes_component_1 = require("./routes/routes.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                article_component_1.ArticleComponent,
                authorization_component_1.AuthorizationComponent,
                article_list_component_1.ArticleListComponent,
                not_found_component_1.NotFoundComponent,
                new_article_component_1.NewArticleComponent,
                profile_component_1.ProfileComponent,
                nav_component_1.NavComponent,
                routes_component_1.RoutesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
