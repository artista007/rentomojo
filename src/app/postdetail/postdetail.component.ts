import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../models/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from '../models/Comment';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  commentFetched: boolean = false;
  postId: number = 0;
  post: IPost;
  comments: IComment[] = [];
  btnText: string = "Show";
  show: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      data => {
        this.postId = +data.get("id");
      }
    )
    this.postService.getPost(this.postId).subscribe(
      data => {
        this.post = data;
      }
    )
  }

  getComments(){
    if(this.show){
      this.show = false;
      this.btnText = "Show";
    }
    else {
      this.show = true;
      this.btnText = "Hide";
    }
    if(this.commentFetched)
      return;
    
    this.postService.getComments(this.postId).subscribe(
      data => {
        this.comments = data;
        this.commentFetched = true;
        this.show = true;
        this.btnText = "Hide";
      }
    )
  }

  deletePost(){
    this.postService.deletePost(this.postId).subscribe(
      success => {
        this.router.navigate(['/posts', this.post.userId]);
      }
    )
  }

}
