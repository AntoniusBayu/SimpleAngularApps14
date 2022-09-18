import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-showcar',
  templateUrl: './showcar.component.html',
  styleUrls: ['./showcar.component.css']
})

export class ShowcarComponent implements OnInit {
  carList: any = [];
  modalTitle: any;
  activateAddEditCarCom: boolean = false;
  car: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshCarList();
  }

  refreshCarList() {
    this.sharedService.getCarList().subscribe(data => {
      console.info(data);
      this.carList = data;
    });
  }

  AddCar() {
    this.car = {
      carid: 0,
      carname: "",
      isactive: false
    }
    this.modalTitle = "Add Car";
    this.activateAddEditCarCom = true;
  }

  closeClick() {
    this.activateAddEditCarCom = false;
    this.refreshCarList();
  }

}
