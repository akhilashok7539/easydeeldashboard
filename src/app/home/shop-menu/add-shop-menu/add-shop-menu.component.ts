import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-shop-menu',
  templateUrl: './add-shop-menu.component.html',
  styleUrls: ['./add-shop-menu.component.css']
})
export class AddShopMenuComponent implements OnInit {
  shopmenuFormRegistration: FormGroup;
  submitted = false;

  sname = "";
  location = "";
  mname = "";
  mdes;
  prate;
  srate;
  dperc;
  damount;
  patime;
  pctime;
  files;
  currentphoto;
  mimages;
  // mstyle="";
  shops: any = [];
  locations: any = [];
  menu: any = [];
  formData = new FormData();
  showorhide = "Show";
  status = "Active";
  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router, private ToastrService: ToastrService) { }

  ngOnInit() {
    this.shopmenuFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        location: ['', Validators.required],
        mname: ['', Validators.required],
        mdes: ['', Validators.required],
        prate: ['', ],
        srate: ['', Validators.required],
        dperc: ['', Validators.required],
        damount: ['', Validators.required],
        patime: ['', Validators.required],
        pctime: ['', Validators.required],
        mimages: ['', Validators.required],
        showorhide:['', Validators.required],
        status:['',Validators.required],
        // mstyle: ['', Validators.required],
      })
      
      this.getallShop();
      this.getalllocations();
      this.getallmenu();

  }
  get f() { return this.shopmenuFormRegistration.controls; }

  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.shopmenuFormRegistration.invalid) {
      return;
    }
    else {


      this.prate ="0";
      this.formData.append("shop_id",this.sname)
      this.formData.append("location_id",this.location)
      this.formData.append("menu_id",this.mname)
      this.formData.append("menu_desc",this.mdes)
      this.formData.append("purchaseRate",this.prate)
      this.formData.append("salesRate",this.srate)
      this.formData.append("discount",this.dperc)
      this.formData.append("discamountAmount",this.damount)
      this.formData.append("closingTime",this.pctime)
      this.formData.append("availableTime",this.patime)
      this.formData.append("status",this.status)
      this.formData.append("show",this.showorhide)
      this.formData.append("addrest_img",this.currentphoto)
      
      this.easydealservice.addrestmenusss(this.formData).subscribe(
        data =>{
          this.ToastrService.success("Shop Menu added sucessfully ");
          this.router.navigate(['/shopmenu']);
        },
        error =>{
          this.ToastrService.error("Shop Menu unable to add sucessfully ")
          
        }
      )
    }
  }
  addshopimage(event)
  {
    
    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  shopselcted(s)
  {
    console.log(s);
    
  }
  getallShop() {
    this.easydealservice.getshop().subscribe(
      data => {
        console.log(data);
        this.shops = data;
        // this.dataSource.data = this.results;
      },
      error => {
        console.log(error);
      }
    )
  }
  getalllocations() {
    this.easydealservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.locations = data;


      },
      error => {
        console.log(error);

      }
    )
  }
  getallmenu() {

    this.easydealservice.getallmenu().subscribe(

      data => {
        console.log(data);
        this.menu = data;
    
      },
      error => {
        console.log(error);

      }
    )
  }
}
