import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../Model/posts';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
    PostList: Posts[];

    constructor(private http: HttpClient) { }

    GetPostList(url: string) {
        return this.http.get<Posts[]>(url)
    }

}
