import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  showForm = true;
  loginForm: FormGroup;
  formErrors: object = {
    'name': '',
    'password': ''
  };

  constructor(private fb: FormBuilder, private userService: ApiService) {}
  ngOnInit(): void {
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
        Validators.maxLength(24),
        ValidationService.passwordValidator
      ]]
    });
  }

 /* private checkLoginForm(formData: any): boolean { // jslint: ignoreline
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
  }*/
  doLogin() {
    if (!this.loginForm) { return; }
    const formData = this.loginForm;
    this.showForm = false;
    /*if (this.checkLoginForm(formData)) {
      this.showForm = false;
    }*/
    this.userService.getUser()
      .then(function (user) {
        if (formData.value.email === user[0].name && formData.value.password === user[0].password) {
          this.showForm = false;
          // console.log('LOGGED IN');
        }
      })
  .catch(error => console.log(error));
}

}
