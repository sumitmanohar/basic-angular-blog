import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlog:any;



  constructor(private _BlogServiceService :BlogServiceService) { }

  ngOnInit() {
   this._BlogServiceService.getAllBlog().subscribe(
     data=>{
     console.log(data)
     this.allBlog=data['data']
     console.log(this.allBlog)
     }
   )


  }

}   //end of class
