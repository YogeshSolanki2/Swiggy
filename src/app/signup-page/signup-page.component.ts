import {Component ,OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent implements OnInit {
  constructor() { }

  minimunLength=2;
  maximumLength=20;
  
  signUpForm = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(this.minimunLength),
      Validators.maxLength(this.maximumLength),]),

    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(this.minimunLength),
      Validators.maxLength(this.maximumLength),]),

    email: new FormControl('',[
      Validators.required,
      Validators.email]),
      
    password: new FormControl('',[
      Validators.required,
      Validators.pattern("^(?=.*[0-9])"+ "(?=.*[a-z])(?=.*[A-Z])"+ "(?=.*[@#$%^&+=])"+ "(?=\\S+$).{8,20}$")]) 
  })

  get data(){
    return this.signUpForm.controls;
  }
 submit(){
   console.log(this.signUpForm.value);
 }

  ngOnInit(): void {
  }

}
