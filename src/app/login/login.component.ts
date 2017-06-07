import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'my-login',
  templateUrl: 'login.component.html',
  providers: [ApiService]
})
export class LoginComponent {
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public fb: FormBuilder, private userService: ApiService) {
  }

  doLogin() {
    console.log(this.loginForm.value);
    const formData = this.loginForm.value;
    this.userService.getUser()
      .then(function (user) {
        console.log(user);
        if (formData.email === user[0].name && formData.password === user[0].password) {
          console.log('LOGGED IN');
        }
      })
  .catch(error => console.log(error));
}

}
