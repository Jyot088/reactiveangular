import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  integerRegex = /^\d=$/ 
  emailRegex= /(^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$)/
  title = 'reactive-form';
 
  
  registerForm = new FormGroup({
    fname : new FormControl("",[Validators.required, Validators.maxLength(32)]),
    lname : new FormControl("",[Validators.required, Validators.maxLength(32)]),
    age : new FormControl("",[Validators.required, Validators.max(32), Validators.min(18), Validators.pattern(this.integerRegex)]),
    mobile : new FormControl("",[Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
    email : new FormControl("",[Validators.required, Validators.maxLength(32),  Validators.pattern(this.emailRegex)]),
    password : new FormControl("",[Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    cofirm_password : new FormControl("",[Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
  })
  
  

getControl(name :any): AbstractControl| null{
 return this.registerForm.get(name)
}
registerFn(){
  console.log(this.registerForm.value)

}

constructor(private router: Router) { }
  
submitDetails() {
  sessionStorage.clear();
  this.router.navigate(['home']);
}

}
