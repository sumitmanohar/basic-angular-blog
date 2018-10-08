import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import {Location} from "@angular/common"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {
   public currentBlogId;
   public currentBlog;
 
  constructor(private toastr: ToastrService,private location:Location,private _route:ActivatedRoute,private blogservice:BlogServiceService,private router: Router) { }

  ngOnInit() {
    this.currentBlogId=this._route.snapshot.paramMap.get('blogId')
    console.log(this.currentBlogId)
    this.blogservice.getCurrentBlog(this.currentBlogId).subscribe(
     data=>{
       console.log(data)
       this.currentBlog=data['data']
       console.log(this.currentBlog)
     }


    )
  
  }
  deleteBlog():any{
    this.blogservice.deleteBlog(this.currentBlogId).subscribe(

      data=>{
        console.log(data)
        console.log("hi")
        this.toastr.success('Delete Succesfully', 'Message', {
          timeOut: 900,
        });
        setTimeout(()=>{
          this.router.navigate(['/home'])
        },1000)
      }
    )
    
  }
  goToPrvePage():any{
   this.location.back()
  }

}
