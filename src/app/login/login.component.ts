import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario:Usuario;

  constructor(private _fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this._fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }
  login() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(response=>{
      
 
      console.log(response);
      this.authService.guadarUser(response.access_token);
      this.authService.guadarToken(response.access_token);
     
      console.log(this.loginForm.value)
    });
      
   
   
      

  }


}
