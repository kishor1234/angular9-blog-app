import { Component, OnInit } from '@angular/core';
import { BlogServicesService } from '../blog-services.service';
import { GlobalConstants } from '../common/global-constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogData: any;
  apiURL: string = GlobalConstants.apiURL;
  p: any = 0;
  constructor(private http: BlogServicesService) { }

  ngOnInit(): void {
    this.http.blogSnapShort().subscribe(response => {
      this.blogData = response;
      console.log(this.blogData);
    });
  }

}
