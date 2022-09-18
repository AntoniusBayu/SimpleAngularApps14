import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() car: any;
  carid: Number = 0;
  carname: string = "";
  isactive: boolean = false;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.carid = this.car.carid;
    this.carname = this.car.carname;
    this.isactive = this.car.isactive;
  }

  addCar() {
    var val = {
      carid: 11,
      carname: this.carname,
      isactive: this.isactive
    };
    this.service.addCar(val).subscribe(res => {
      alert(res.toString());
    })
  }
}
