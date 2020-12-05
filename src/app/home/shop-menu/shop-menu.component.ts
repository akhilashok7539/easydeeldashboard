import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.css']
})
export class ShopMenuComponent implements OnInit {

  displayedColumns = ['id', 'menuname','purchaserate', 'salesrate', 'discountpercentage', 'discountamount', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  options: any = "";
  results: any[];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService) { }

  ngOnInit() {
    this.getrestmentall();
  }
  getrestmentall()
  {
    this.easydeelservice.getallmenus().subscribe(
      data =>{
        let arr:any = [];
        arr = data;
        this.dataSource.data = arr;
      },
      error =>{

      }
    )
  }
  selectedevent(s) {
    console.log(s);
    if (s == "s") {
      this.results = [
        {
        "id": "`1",
        "shopmenu": "Blackforest"
      },
      {
        "id": "`1",
        "shopmenu": "Adithya"
      },   {
        "id": "`1",
        "shopmenu": "Murali"
      },   {
        "id": "`1",
        "shopmenu": "Thaza"
      },
    ]
    }
    else if (s == "m") {
      this.results = [
        {
        "id": "`1",
        "shopmenu": "Kerala"
      },
      {
        "id": "`1",
        "shopmenu": "Italian"
      },   {
        "id": "`1",
        "shopmenu": "Chineese"
      },   {
        "id": "`1",
        "shopmenu": "Mexico"
      },
    ]
    }
    else if (s == "l") {
      this.results = [
        {
        "id": "`1",
        "shopmenu": "Haripad"
      },
      {
        "id": "`1",
        "shopmenu": "Kayamkulam"
      },   {
        "id": "`1",
        "shopmenu": "Mavelikara"
      },   {
        "id": "`1",
        "shopmenu": "Karunagappally"
      },
    ]
    }

  }
}
