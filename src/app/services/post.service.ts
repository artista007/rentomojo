import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/Post';
import { tap } from 'rxjs/operators';
import { IComment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string = `https://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<IPost>{
    return this.http.get<IPost>(`${this.baseUrl}posts/${id}`).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getPosts(id: number, skip: number, limit: number): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.baseUrl}posts?userId=${id}&skip=${skip}&limit=${limit}`).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getComments(id: number): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl + "comments?postId=" + id);
  }

  deletePost(id: number): Observable<void>{
    return this.http.delete<void>(this.baseUrl + "posts/" + id);
  }
}
