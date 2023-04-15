import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  salesmanArea : string;
  quantity:number;
  salesAmount:number

  constructor(public dialog: MatDialogRef<ProductComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.salesmanArea = data.salesmanArea,
      this.salesAmount=data.salesAmount,
      this.quantity=data.quantity

  }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }
}
