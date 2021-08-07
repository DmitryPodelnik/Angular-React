import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {Injectable} from '@angular/core';

import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class NewArticleGuard implements CanActivate {

  constructor(private authService: AuthorizationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

        return this.authService.getLogCondition();
    }
}
