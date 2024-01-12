import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
    inputVal:string='This is Property Binding';


    onFocus(){
      console.log("event binding called");

    }
}
