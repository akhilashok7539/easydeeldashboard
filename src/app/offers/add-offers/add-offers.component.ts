import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.css']
})
export class AddOffersComponent implements OnInit {

  offerFormRegistration:FormGroup;
  submitted = false;

  sname ='';
  mname;
  oloc ='';
  odes;  
  tqpurc;
  tnusers;
  oprice;
  aprice;
  adata;
  atime;
  ctime;
  cashback;
  bimages;
  formData = new FormData();
  files;
  currentphoto;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.offerFormRegistration = this.formbuilder.group(
      {

        sname:['', Validators.required],
        mname: [''],
        oloc:['', Validators.required],
        odes:['', Validators.required],
        tqpurc: ['', Validators.required],
        tnusers: ['', Validators.required],
        oprice: ['', Validators.required],
        aprice: ['', Validators.required],
        adata: ['', Validators.required],
        atime: ['', Validators.required],
        ctime: ['', Validators.required],
        cashback: ['', Validators.required],
        bimages: ['', Validators.required],
    })

  }
get f() { return this.offerFormRegistration.controls; }
addimg(event)
{
  
  this.files = event.target.files;
  this.currentphoto = this.files.item(0);
}
  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.offerFormRegistration.invalid) {
        return;
    }
    else{
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);
      this.formData.append("",this.sname);

    }
  }
}
