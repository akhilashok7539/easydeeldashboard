import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';
 
@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  result :any = [];
  details:any = [];
  itemresult:any = [];
  oid;
  deliveryboys :any = [];
  dboyid;
  status ;
  dboyName;
  isStatus= false;
  shopdetails: any=[];
  sname:any;
textfieldstatus=false;
name;
address;
number;
changenamearray:any = [];
  sphone:any;
  userdetails:any=[];
  locationid;
  statuslogin;
  constructor(@Inject(MAT_DIALOG_DATA) data, private easydeelservice:EasydealService,private toaster:ToastrService,
  private dialogRef: MatDialogRef<ViewOrderDetailsComponent>) 
  { 
    this.details = data;
    console.log(this.details);
    this.status = this.details.order_status;
    console.log(this.status);
    this.changenamearray = this.details['change_name'];
    // console.log(this.changenamearray.length);
    
    this.statuslogin = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if(this.details.dboy_id == null)
    {
      this.dboyName = "";
    }
    else{
      this.dboyName = this.details.dboy_id['name']

    }
    if(this.status == 'Pending')
    {
      console.log('here');
      
      this.isStatus = true;
    }
    else{
      console.log('ele');
      this.isStatus = false;

    }

    this.result = data['items'];
    this.getorderbyorderid();
    this.getalldeliveryboy();
    this.gethopdetailsbyorderid();
  }

  ngOnInit() {
  }
  Changename()
  {
    this.textfieldstatus= true;
  }
  submitform()
  {
    let ree = {
        "orderid":this.details['order_id'],
        "name":this.name,
        "phone":this.number,
        "address":this.address
    }
    console.log(ree);
    this.easydeelservice.addNameandnumber(ree).subscribe(
      data =>{
        this.textfieldstatus= false;
      },
      error =>{
        this.toaster.error("You Cannot change address again limit exceeds");
      }
    )
  }
  getorderbyorderid()
  {
    this.oid = this.details['order_id']
    this.easydeelservice.getorerbyuserid(this.oid).subscribe(
      data =>{
        this.itemresult = data['data'];
      },
      error =>{

      }
    )
  }
  getalldeliveryboy()
  {


    if(this.statuslogin =='masteradmin')
    {
      this.easydeelservice.getalldeliveryboy().subscribe(
        data =>{
        
          this.deliveryboys = data;
        },
        error =>{
  
        }
      )
    }
    else if(this.statuslogin == 'locationamin'){
      this.locationid=this.userdetails['locationId']._id;
      console.log(this.locationid);
      this.easydeelservice.getalldeliveryboybylocations(this.locationid).subscribe(
        data =>{
        
          this.deliveryboys = data;
        },
        error =>{
  
        }
      )

    }


   
  }
  assgin(){
      let req = {
        "deliverboy":this.dboyid
      }
      console.log(req);
      this.easydeelservice.assignorder(req,this.details.customer_id['_id'],this.details.order_id).subscribe(
        data =>{
          this.toaster.success("Order Assigned");
          this.dialogRef.close();
        },
        error =>{

        }
      )
  }
  reject(){
    let req = {
      "order_status":"Reject"
    }
    this.easydeelservice.reject(req,this.details.customer_id['_id'],this.details.order_id).subscribe(
      data =>{
        this.toaster.success("Order Assigned");
        this.dialogRef.close();
      },
      error =>{

      }
    )
  }
  pending()
  {
    let req = {
      "order_status":"Pending"
    }
    this.easydeelservice.reject(req,this.details.customer_id['_id'],this.details.order_id).subscribe(
      data =>{
        this.toaster.success("Order Status changed");
        this.dialogRef.close();
      },
      error =>{

      }
    )
  }
  gethopdetailsbyorderid()
  {
    this.easydeelservice.getshopdetailsbyorderid(this.details.order_id).subscribe(
      data =>{
          let req :any=[];

          req = data['data'];
          // console.log();
          
          this.shopdetails = req;
          this.sname = this.shopdetails[0].shop_id['shop_name'];
          this.sphone = this.shopdetails[0].shop_id['shop_phone'];
          // console.log(this.shopdetails[0].shop_id['shop_name']);
          
      },
      error =>{

      }
    )
  }
}
