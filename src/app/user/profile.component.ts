import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    .error {background-color: #E3C3C5}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup

  constructor(private authService:AuthService, private router:Router) {

  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)  
      this.router.navigate(['events'])
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }
}