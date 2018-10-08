import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  currentBlogId:any
  editBlog:any
  blog:any

  constructor(private _route:Router,private _act:ActivatedRoute,private _blogService:BlogServiceService,private toastr: ToastrService) {
   
   }

  ngOnInit() {
   this.currentBlogId=this._act.snapshot.paramMap.get("blogId")
   console.log(this.currentBlogId)
   this._blogService.getCurrentBlog(this.currentBlogId).subscribe(
     data=>{
       console.log(data)
       this.blog=data['data']
       console.log(this.blog)
     }
   )
  }

  EditThis():any{
    this._blogService.editBlog(this.currentBlogId,this.blog).subscribe(
      data=>{
        console.log(data)
        this.toastr.success('Edit Succesfully','Message',{
          timeOut: 900,
        });
        setTimeout(()=>{
          this._route.navigate(['/blog',this.currentBlogId])
        },1000)
          
        
      }
    )

  }

}
