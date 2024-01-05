import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})

export class AuthGuard {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.checkIsAuth().then( isAuth => {
            if (isAuth){
                return true
            } else {
                this.router.navigate(['/sign_in'], {
                    queryParams: {
                        auth: false
                    }
                })
                return false
            }
        })
    }
}