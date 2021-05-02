import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public form = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get f() {
    return this.form.controls;
  }

  createUser() {
    console.log(this.form.value);
    let formData = this.form.value
    let stored = localStorage.getItem('users') ?? false
    if (!stored){
      localStorage
            .setItem('users', JSON.stringify([formData]))
    }else{
      let toStore = [...JSON.parse(stored), formData]
      localStorage.setItem('users', JSON.stringify(toStore))
    }
    this.form.reset();
    this.toastr.success('Hello world!', 'Toastr fun!');
    // this.router.navigateByUrl('/login')
  }

  handleClick() {
    console.log("Clicked")
  }

}
