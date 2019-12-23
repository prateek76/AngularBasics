import { TOASTR_TOKEN,Toastr } from './../common/toastr.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    .error {background-color: #E3C3C5}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup

  constructor(private authService:AuthService,
    private router:Router,@Inject(TOASTR_TOKEN) private toastr: Toastr) {

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
      //this.router.navigate(['events'])
      this.toastr.success('Profile Saved')
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }
}