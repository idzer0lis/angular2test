import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  showForm = true;
  loginForm: FormGroup;
  formErrors: object = {
    'name': '',
    'password': ''
  };

  constructor(private fb: FormBuilder, private userService: UserService) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.loginForm = this.fb.group({
      'username': ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24)
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
        ValidationService.passwordValidator
      ]]
    });
  }
  doLogin() {
    if (!this.loginForm) { return; }
    const formData = this.loginForm;
    let userService = this.userService;
    console.log('Trying to log in...');
    userService.getUser()
      .then(function (user) {
        if (formData.value.username === user[0].name && formData.value.password === user[0].password) {
          // formData.showForm = false;
          console.log('LOGGED IN');
        }
      })
  .catch(error => console.log(error));
}

}
