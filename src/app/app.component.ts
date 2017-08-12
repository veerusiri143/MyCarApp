import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements = [];
 details =[];
 onServerAdded(serverData: {carName: string, carType: string, carImage: string}) {
   this.serverElements.push({
     name: serverData.carName,
     type: serverData.carType,
     carimage: serverData. carImage
   });
 }
 onDisplayAdded(serverData: {carName: string, carType: string, carImage: string}) {
  if(this.details.length > 0 ){
  this.details.length = 0
  }
   this.details.push({
     name: serverData.carName,
     type: serverData.carType,
     carimage: serverData. carImage
   });
 }
  title = 'app';
}
