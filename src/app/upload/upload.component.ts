import {Component, OnInit} from '@angular/core';
import {NetworkServiceService} from "../Service/network-service.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{
  formData: FormData;

  ErrorMsg = false;

  ngOnInit() {
  }

  constructor(private networkService: NetworkServiceService) {
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const jsonBlob = new Blob([reader.result], { type: 'application/json' });
      this.formData = new FormData();
      this.formData.append('data', jsonBlob, file.name);
    };
  }

  onSubmit() {
    if (this.formData) {
      this.networkService.computeSalesAndSaveToDB(this.formData);
      window.location.reload();
    } else {
      this.ErrorMsg = true;
    }
  }



}
