import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  user = {
    password: 'test'
  };

  passwordInput = '';
  loggedin: boolean = false

  login() {
    if (this.passwordInput === this.user.password) {
      console.log('Login successful');
      this.router.navigate(['/nav']);
    } else {
      console.log('Invalid username or password');
      console.log(this.passwordInput);
    }
  }

}
