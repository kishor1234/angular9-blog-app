import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from './common/global-constants';
@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {

  url: string = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  blogSnapShort() {
    
    return this.http.get(this.url+'?r=blogSnapShort');
    //return this.http.get('http://localhost:8080/blog');
  }

  singleBlogData(useData:any)
  {
    //return this.http.post<any>('http://localhost:8080/singleBlog',useData);

    return this.http.post<any>(this.url+'?r=singleBlogData',useData);
  }
}
