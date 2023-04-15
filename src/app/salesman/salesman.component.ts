import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit{

  salesmanArea : string;
  salesmanCommission:number;
  salesAmount:number

  constructor(public dialog: MatDialogRef<SalesmanComponent>, @Inject(MAT_DIALOG_DATA) public data) {
              this.salesmanArea = data.salesmanArea,
                this.salesAmount=data.salesAmount,
                this.salesmanCommission=data.salesmanCommission

              }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }
}
