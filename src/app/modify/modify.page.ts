import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from '../services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-modify',
  templateUrl: './modify.page.html',
  styleUrls: ['./modify.page.scss'],
})
export class ModifyPage implements OnInit {

  modifyform: FormGroup;
  public docid: string;
  productlist = {
    producttitle: "",
    productprice: "",
    productdesc: ""

  };

  constructor(public modifyformbuilder: FormBuilder,
    private toastservice: ToastService,
    public ngroute: Router,
    public acroute: ActivatedRoute,
    private fbstore: AngularFirestore) {

    this.docid = this.acroute.snapshot.paramMap.get("id");

    this.modifyform = this.modifyformbuilder.group({
      producttitle: ['', [Validators.required, Validators.minLength(6)] ],
      productprice: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]*$")] ],
      productdesc: ['', [Validators.required, Validators.minLength(6)] ]
    })
  }

  ngOnInit() {
    this.getProduct(this.docid);
  }

  async getProduct(docid: string){
    try{
      await this.fbstore.doc("products/"+docid).valueChanges()
      .subscribe(result => { 
        console.log("modify>>>" + result)
        this.modifyform.controls['producttitle'].setValue(result["pt"]);
        this.modifyform.controls['productprice'].setValue(result["pp"]);
        this.modifyform.controls['productdesc'].setValue(result["pd"]);
       
      });
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }

  async doModify() {
    
    let productobj = {
      pt: this.modifyform.get('producttitle').value,
      pp: this.modifyform.get('productprice').value,
      pd: this.modifyform.get('productdesc').value
    }
    try{
      await this.fbstore.doc("products/"+this.docid).update(productobj).then(data => {
        console.log(data);
        this.ngroute.navigate(['home']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }

}
