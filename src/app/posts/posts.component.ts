import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userId : string = "";
  postList: IPost[] = []
  skip: number = 0;
  limit: number = 10;
  showBtn: boolean = true;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.userId = params.get('id');
      }
    );
    this.getPosts();
    

  }

  loadMorePosts(event: Event){
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts(+this.userId, this.skip, this.limit).subscribe(
      data => {
        this.postList.push(...data);
        if(data.length < this.limit){
          this.showBtn = false;
        }
        this.skip += this.limit;
        
      }
    )
  }

}
