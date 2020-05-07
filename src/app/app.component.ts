import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  flags: boolean = false;
  flag: string = "";
  
  public api: string = "http://pest.lcl/";
  onTogalChange() {
    this.flags == true ? this.flag = "active" : this.flag = "";
  }
}
