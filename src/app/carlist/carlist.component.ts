import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
 @Input('srvElement') element: {name: string, type: string, carimage: string};
 @Output() detailsCreated = new EventEmitter<{carName: string, carType: string, carImage: string}>();
 
 display(event) {
 this.detailsCreated.emit({
 carName: event.srcElement.children["0"].children["0"].innerHTML,
 carType: event.srcElement.children["0"].children["0"].nextElementSibling.innerHTML,
 carImage: event.srcElement.lastElementChild.firstElementChild.src
 });
 }
  constructor() { }

  ngOnInit() {
  }

}
