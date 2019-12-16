import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    username
    password
    mouseoverLogin
    constructor(private authService: AuthService, private router:Router) {
        
    }
    login(formValues) {
        this.authService.loginUser(formValues.username,formValues.password);
        console.log(formValues);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}