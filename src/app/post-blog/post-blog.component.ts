import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  public blogTitle:any
  public bodyBlog:any
  public DescriptionBlog:any
  public CategoryBlog:any

  public possibleCategory=["comedy","technology","music","gym"]
  

  constructor(private toastr: ToastrService,private _BlogServiceService:BlogServiceService,private router:Router) { 
    
  }

  ngOnInit() {
   
  }
  creatBlog():any{
    let allData={
      title:this.blogTitle,
      description:this.DescriptionBlog,
      blogBody:this.bodyBlog,
      category:this.CategoryBlog
    
    }
    console.log(allData)
    this._BlogServiceService.createBlog(allData).subscribe(

      data=>{
        console.log("Blog Created")
        console.log(data)
        this.toastr.success('BlogPost Succesfully', 'Message', {
          timeOut: 900,
        });
        // this.toastr.success('You are awesome!', 'Success!');
        setTimeout(()=>{
        
           this.router.navigate(['/blog',data.data.blogId])
          
        
        },1000)
       
      }
    )

  }

}
