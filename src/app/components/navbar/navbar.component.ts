import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //@Input login: LoginComponent;
  @Input('showForm') showForm: boolean;
  constructor() {}

  ngOnInit(): void {
    console.log('Hello Home');

  };

}
