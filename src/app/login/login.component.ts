import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') === null){
      localStorage.setItem('currentUser', JSON.stringify({loggedIn: false}))
    }
  }

  login = {invalid:false}
  get loginData(){
    return this.login
  }

  public form = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get f() {
    return this.form.controls;
  }

  handleLogin() {
    console.log(this.form.value);
    let formData = this.form.value;
    let users = JSON.parse(localStorage.getItem('users') ?? '[]')
    let user = users.filter((user:any) => user.Email == formData.Email && user.Password == formData.Password)
    console.log(user);
    if (user.length === 0)
    {
      this.login.invalid=true
      return
    }
    localStorage.setItem('currentUser', JSON.stringify({loggedIn: true, ...user[0]}))
    this.router.navigateByUrl('/home')
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  handleClick() {
    console.log("Clicked")
  }

}
