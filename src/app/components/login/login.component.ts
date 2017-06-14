import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { validationMessages } from './validation.errors';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  showForm = true;
  loginForm: FormGroup;
  formErrors = {
    'name': '',
    'password': ''
  };
  validationMessages = validationMessages();

  constructor(private fb: FormBuilder, private userService: ApiService) {}
  ngOnInit(): void {
    console.log(validationMessages);
    this.buildForm();
  }
  buildForm(): void {
    this.loginForm = this.fb.group({
      'name': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24) // you can add your own custom validation
      ]]
    });
  }

  private checkLoginForm(formData: any): boolean { // jslint: ignoreline
    let formValidated = true;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = formData.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
            formValidated = false;
        }
      }
    }
    return formValidated;
  }
  doLogin() {
    if (!this.loginForm) { return; }
    const formData = this.loginForm;
    if (this.checkLoginForm(formData)) {
      this.showForm = false;
    }
    this.userService.getUser()
      .then(function (user) {
        console.log(user);
        if (formData.value.email === user[0].name && formData.value.password === user[0].password) {
          // console.log('LOGGED IN');
        }
      })
  .catch(error => console.log(error));
}

}
