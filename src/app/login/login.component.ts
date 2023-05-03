import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavComponent } from 'src/app/nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  user = {
    password: 'LKWWalter$'
  };

  passwordInput = '';
  logInShow: boolean = true

  onSubmit(form: NgForm) {
    if (this.passwordInput === this.user.password) {
      console.log('Login successful');
      this.logInShow = false;
      const factory = this.resolver.resolveComponentFactory(NavComponent);
      const componentRef = this.viewContainerRef.createComponent(factory);
      document.body.appendChild(componentRef.location.nativeElement);
    } else {
      console.log('Invalid username or password: ' + this.passwordInput);
      alert("Ungültiges Passtort!")
    }
  }

}