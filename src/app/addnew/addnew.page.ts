import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.page.html',
  styleUrls: ['./addnew.page.scss'],
})
export class AddnewPage implements OnInit {

  addnewform: FormGroup;

  constructor(public addnewFormbuilder: FormBuilder,
    private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore) {
    this.addnewform = this.addnewFormbuilder.group({
      producttitle: ['', [Validators.required, Validators.minLength(6)] ],
      productprice: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]*$")] ],
      productdesc: ['', [Validators.required, Validators.minLength(6)] ]
    })
  }

  ngOnInit() {
  }

  async doAddnew() {
    
    let productobj = {
      pt: this.addnewform.get('producttitle').value,
      pp: this.addnewform.get('productprice').value,
      pd: this.addnewform.get('productdesc').value
    }
    try{
      await this.fbstore.collection("products").add(productobj).then(data => {
        console.log(data);
        this.ngroute.navigate(['home']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }

}
