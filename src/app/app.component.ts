import { Component } from '@angular/core';
import { UserService } from './services/user';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor(private api: UserService) {
    this.title = this.api.title;
  }
}
