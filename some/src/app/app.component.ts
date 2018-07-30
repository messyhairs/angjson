import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  data = { "languages":[{"1":"Hindi"},{"2":"English"},{"3":"Metallica"}], "status":"200" };

  getKey(el){
    return Object.keys(el)[0];
  }
  
  getValue(el){
    return el[this.getKey(el)];
  }
}