import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Validator } from '../helpers/validation.helpers';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupform: FormGroup;

  constructor(private fbauth: AngularFireAuth,
    public signupFormbuilder: FormBuilder,
    private valuechecker: Validator,
    private toastservice: ToastService,
    public ngroute: Router) {
    this.signupform = this.signupFormbuilder.group({
      useremail: ['', Validators.required, this.valuechecker.emailCheck],
      userpass: ['', [Validators.required, Validators.minLength(6)] ]
    })
  }

  ngOnInit() {
  }

  async doSignup() {
    //console.log(this.signupform.get('useremail').value)
    try{
      await this.fbauth.createUserWithEmailAndPassword(this.signupform.get('useremail').value, this.signupform.get('userpass').value).then(data => {
        console.log(data);
        this.ngroute.navigate(['login']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }

}
