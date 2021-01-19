import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-delivery-boys',
  templateUrl: './edit-delivery-boys.component.html',
  styleUrls: ['./edit-delivery-boys.component.css']
})
export class EditDeliveryBoysComponent implements OnInit {
  deliveryboyFormRegistration: FormGroup;
  submitted = false;

  dname;
  uname;
  address;
  mobile;
  aadhar;
  password;
  isLoading = false;
  button = 'Submit';
  location;

  constructor(private formbuilder: FormBuilder,
    private router:Router,
    private toaster:ToastrService,private easydeelservie:EasydealService) { }

  ngOnInit() {
    this.deliveryboyFormRegistration = this.formbuilder.group(
      {
        dname: ['', Validators.required],
        uname: ['', Validators.required],
        address: ['', Validators.required],
        mobile: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
        aadhar: ['', Validators.required],
        password: ['', Validators.required],
        location:['', Validators.required],
      })

  }
  get f() { return this.deliveryboyFormRegistration.controls; }

  submit() {

    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.deliveryboyFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      let req = {
        "name": this.dname,
        "userName": this.uname,
        "address": this.address,
        "mobileNo": this.mobile,
        "aadhar_id": this.aadhar,
        "password": this.password,
        "state":"Active"
      }
      this.easydeelservie.adddeliveryboy(req).subscribe(
        data =>{
          this.toaster.success("Delivery Boy Added");
          this.router.navigate(['/deliveryboys']);
        },
        error =>{
          this.isLoading = false;
          this.button = 'submit';
          // this.toaster.error(error.error)
          this.toaster.error(error.error['responce']);
          
          // this.toaster.error("Unable to add Delivery Boy");
        }
      )

    }
  }
}