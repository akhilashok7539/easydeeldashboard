import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';
// import { environment } from 'src/environments/environment';
// import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns = ['id', 'categoryname', 'image', 'action'];
  dataSource = new MatTableDataSource();
  sortBy:any;
  apiUrl;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;
  results: any = [];


  constructor(private easydealservice: EasydealService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.apiUrl = "https://shopgi.in/";
    this.dataSource.sort = this.sort; 
   
    this.getallCategory();

  }
  // ngAfterViewInit() {
  //   // this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
    
   
  // }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    console.log(' aaa' );
   this.dataSource.sortingDataAccessor = (item, property) => {
    // property = this.sortBy;
    //  console.log('item: '+JSON.stringify(item)+' '+' property: '+ property);

 switch (property) {
   case 'categoryname': {
     console.log(item);
    //  let req :any= [];
    //  req = JSON.stringify(item)
    //  this.dataSource.data = req;
     return item[property];
     }

   case 'id': {
       console.log('Inside date');
       // this.dataSource.sort(function (a,b){
       //   let c = new Date(a.date);
       //   let d = new Date(b.date);
       //   return c-d;
       // });
      //  let newDate = new Date(item.date);
      //  console.log(newDate);
    //  return newDate;
   }
   default: {
     console.log('Inside default sort',property);
     return item[property];
    }
           }
       };
       
     // this.dataSource.sort = this.sort;
   //  console.log(this.dataSource.sort);
 }
      sortColumn($event:Sort) {
        console.log($event);
      }
  edit(s) {
    sessionStorage.setItem("cat", JSON.stringify(s));
    this.router.navigate(['/editcategory'])

  }
  getallCategory() {
    this.easydealservice.getcat().subscribe(
      data => {
        console.log(data);
        this.results = data;
        this.dataSource.data = this.results;
      },
      error => {
        console.log(error);
      }
    )
  }
  getCurrentOptions() {
    const options: ViewOptions = {
      sortField: this.sort.active,
      sortDirection: this.sort.direction,
      page: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    };

    return options;
  }
  active(s) {
    console.log(s);

    this.easydealservice.changecategorystatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  inactive(s) {

    this.easydealservice.changecategorystatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
}

export class ViewOptions {
  sortField: string;
  sortDirection: string;
  page: number;
  pageSize: number;
}