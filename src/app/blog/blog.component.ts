import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BlogServicesService } from '../blog-services.service';
import{ GlobalConstants } from '../common/global-constants';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title:string;
  sub:any;
  blogData:any;
  jsonData:Object;
  success:any;
  failed:any;
  apiURL:string=GlobalConstants.apiURL;
  viewContent:any;
  constructor(private childRout:ActivatedRoute,private http: BlogServicesService) { }

  ngOnInit(): void {
    this.sub=this.childRout.params.subscribe(par=>{
      this.title=par["title"];
      this.jsonData=JSON.stringify({"title":this.title});
      console.log(this.title);
    });

    this.http.singleBlogData(this.jsonData)
    .subscribe(
      response=>{
        this.success=response;
        this.viewContent=this.success[0].description;
        console.log(this.success);
      },
      error=>{
        this.failed=error.message;
        console.log(this.failed);
      }
    );
  }

}
