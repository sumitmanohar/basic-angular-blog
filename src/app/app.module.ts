import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
// import {ToastModule} from 'ng2-toastr';

import {RouterModule,Router} from "@angular/router"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { AboutComponent } from './about/about.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogServiceService } from './blog-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    PostBlogComponent,
    AboutComponent,
    EditBlogComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
   
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'create',component:PostBlogComponent},
      {path:'edit/:blogId',component:EditBlogComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:"**",component:NotFoundComponent}      

    ])
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
