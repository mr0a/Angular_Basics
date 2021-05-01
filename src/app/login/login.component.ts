import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public form = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get f() {
    return this.form.controls;
  }

  createScript() {
    console.log(this.form.value);
  }

  handleClick() {
    console.log("Clicked")
  }

}
