import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  //styleUrls: ['./app.component.css']
})
export class LoginComponent {
  title = 'app works!';
data = {};
   public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

constructor(fb:FormBuilder) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }
login(data){
  console.log(data)
}

// onSubmit(values:Object):void {
//       console.log(values);
//     this.submitted = true;
//     if (this.form.valid) {
//     //    this.authenticationService.userLogin(values)
//     //              .subscribe(
//     //             data => {
//     //               console.log(data)
//     //                 //this.router.navigate([this.returnUrl]);
//     //             },
//     //             error => {
//     //               //console.log(error)
//     //               this.err = error;
//     //                // this.alertService.error(error);
//     //                 //this.loading = false;
//     //             });
//        console.log(values);
//     }
//   }
}
