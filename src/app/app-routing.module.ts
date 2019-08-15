import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts/:id', component: PostsComponent },
    { path: 'postdetail/:id', component: PostdetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(ROUTES),
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }