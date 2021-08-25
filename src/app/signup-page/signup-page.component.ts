import {Component ,OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent implements OnInit {
  constructor() { }
  firstName='';
  lastName='';
  phoneNumber='';
  username='';
  password='';
  confirmPassword='';
  minimunLength=2;
  maximumLength=20;
  
  // signUpForm = new FormGroup({
    firstNameFormControl= new FormControl('',[
      Validators.required,
      Validators.minLength(this.minimunLength),
      Validators.maxLength(this.maximumLength)]);

    lastNameFromCotrol= new FormControl('',[
      Validators.required,
      Validators.minLength(this.minimunLength),
      Validators.maxLength(this.maximumLength)]);
      
    phoneNumberFormControl=new FormControl('',[
        Validators.required,
         Validators.pattern("(0/91)?[7-9][0-9]{9}")
      ]);

      emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
      
      passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[0-9])"+ "(?=.*[a-z])(?=.*[A-Z])"+ "(?=.*[@#$%^&+=])"+ "(?=\\S+$).{8,20}$")
      ]);

      confirmPasswordFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[0-9])"+ "(?=.*[a-z])(?=.*[A-Z])"+ "(?=.*[@#$%^&+=])"+ "(?=\\S+$).{8,20}$")
      ]);

  // })
signUp(){

}
//   get data(){
//     return this.signUpForm.controls;
//   }
//  submit(){
//    console.log(this.signUpForm.value);
//  }

  ngOnInit(): void {
  }
}
