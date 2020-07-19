import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Validator } from '../helpers/validation.helpers';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;

  constructor(private fbauth: AngularFireAuth,
              public loginFormbuilder: FormBuilder,
              private valuechecker: Validator,
              private toastservice: ToastService,
              public ngroute: Router) {
    this.loginform = this.loginFormbuilder.group({
      useremail: ['', Validators.required, this.valuechecker.emailCheck],
      userpass: ['', Validators.required, '']
    })
  }

  ngOnInit() {
  }

  async doLogin() {
    //console.log(this.loginform.get('useremail').value)
    try{
      await this.fbauth.signInWithEmailAndPassword(this.loginform.get('useremail').value, this.loginform.get('userpass').value).then(data => {
        console.log(data);
        this.ngroute.navigate(['home']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }

}
