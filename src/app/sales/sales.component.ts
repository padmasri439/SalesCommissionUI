import {Component, OnInit} from '@angular/core';
import {NetworkServiceService} from "../Service/network-service.service";
import {MatDialog} from "@angular/material/dialog";
import {UploadComponent} from "../upload/upload.component";
import {SalesmanComponent} from "../salesman/salesman.component";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{

  salesList : any ;
  date : string;
  resultsLength = 0;


  sortTable() {
    this.salesList = this.salesList.reverse();
  }


  ngOnInit() {
    if (  this.date == null || this.date == undefined) {
      this.allSales()
    }
      }
  constructor(private networkService: NetworkServiceService ,public dialog: MatDialog) {


  }


  allSales(){
    this.networkService.getAllSales().subscribe(data => {
      this.salesList = data;
      this.resultsLength = this.salesList.length ;
    });
  }

  searchSalesList() {
    const formattedDate = this.formatDate(this.date);
      this.networkService.getCommissionByDate(formattedDate).subscribe(data => {
        this.salesList = data;
        this.resultsLength = this.salesList.length ;
      });

  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }


  upload(){
     this.dialog.open(UploadComponent ,{
      height: '130px',
      width: '420px',
    });

  }

  openSalesmanInfo(salesmanArea,salesAmount,salesmanCommission) {
    this.dialog.open(SalesmanComponent, {
      width: '30vw',
      data:{ salesmanArea : salesmanArea,
        salesAmount:salesAmount,
        salesmanCommission:salesmanCommission}
    });

  }

  openProductInfo(salesmanArea,quantity,salesAmount) {
    this.dialog.open(ProductComponent, {
      width: '30vw',
      data:{
        salesmanArea : salesmanArea,
        quantity:quantity,
        salesAmount:salesAmount
      }
    });

  }


}
