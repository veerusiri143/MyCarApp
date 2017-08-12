import { Component, OnInit,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-cockpet',
  templateUrl: './cockpet.component.html',
  styleUrls: ['./cockpet.component.css']
})
export class CockpetComponent implements OnInit {
carName= '';
carType='';
carImage='';
@Output('newServerCreated') serverCreated = new EventEmitter<{carName: string, carType: string, carImage: string}>();
onAddServer(carname,cartype,carimage) {
  this.serverCreated.emit({
  carName: this.carName,
  carType: this.carType,
  carImage: this.carImage
  });
  this.carName= '';
  this.carType='';
  this.carImage='';
}
  constructor() { }

  ngOnInit() {
  }

}
