import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5292/post';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    
    return this.http.get<Post[]>( `${this.apiUrl}/getPosts`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/addPost`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePost`,{
      body:id
    });
  }
}