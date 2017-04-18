import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from './login-service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers:[LoginService]
  //styleUrls: ['./app.component.css']
})
export class LoginComponent {
  title = 'app works!';
data = {
  client_id: "ap8G9pGtSshB3vvMZMFKMLPdTyTlOggOOhtLESYM",
  client_secret: "6OSowVmg6R66v8K1YGPnJ6FxcyMxgU3uONh4VouuYCz3VRZftcyFb8t8KmcZrimfQrzOZ1SsdFKXf6a0ed0g06UZUnx4AS2iANLlpQIKb6WX2z0vP7T8lr6uOSkmaU6W",
  grant_type: "password"
};
  //  public form:FormGroup;
  // public username:AbstractControl;
  // public password:AbstractControl;
  // public submitted:boolean = false;

constructor( private loginService: LoginService) {}
// login(data){
//   console.log(data)
// }

 login(data){
    console.log(data)
    return this.loginService.Login(data).subscribe(
      exp => console.log(exp),
      err => console.log(err),
      () =>{ console.log("complete")
    document.getElementById('id01').style.display='none'}
    )
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
