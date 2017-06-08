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
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]
      ]
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) { // jslint: ignoreline
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  doLogin() {
    console.log(this.loginForm);
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
