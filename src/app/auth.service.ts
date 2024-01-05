import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private isAuth = false

    logIn(){
        this.isAuth = true
    }

    logOut(){
        this.isAuth = false
    }

    checkIsAuth(): Promise<boolean>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(this.isAuth)
            })
        } )
    }
}