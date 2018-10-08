import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable()
export class BlogServiceService {
 private allBlog;
 private baseUrl:string="https://blogapp.edwisor.com/api/v1/blogs";
 private accessToken="M2UxYTVkMDM1ZmY2MjY2NGIyMjgwYWQwMWIzM2FhMTY4NDc2Yzg3OGQ4ZDVhZmVkYThiOTNkOTJjZThjZWQxM2YzMDQ1N2Q3ODIyNzVmMzIzNzU5NWEyNDI0ZmVjNDAwMmMwMDdjYWJkY2I3YTczOTAyYTcwMGU4NTZmYjYxNDZjZA=="
  constructor(private _https:HttpClient) { }
   getAllBlog():any{
 let response=this._https.get(this.baseUrl+"/all"+"?authToken="+this.accessToken)
  return response;
   }
   getCurrentBlog(blogId):any{
     let response=this._https.get(this.baseUrl+'/view'+'/'+blogId+'?authToken='+this.accessToken)
     return response;

   }
   createBlog(allData):any{
     let response=this._https.post(this.baseUrl+'/create'+'?authToken='+this.accessToken,allData)
    return response
   }
   deleteBlog(blogId):any{
     let allData
     let response = this._https.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.accessToken, allData)
    //  let response=this._https.post(this.baseUrl+'/'+blogId+'/delete'+'?autoToken='+this.accessToken,allData)
     return response

   }
   editBlog(blogId,allData):any{
  
    let response=this._https.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.accessToken,allData)
   return response 
  }
  

}
