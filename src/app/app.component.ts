import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 metadata = {
   type: "Interstitial",
   items: [
     {
       "type": "Header"
     }
   ]
 }
}
