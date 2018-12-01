import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../../Model/posts';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }
   
    GetCommentsbyPostID(url: string) {
        return this.http.get<Comments[]>(url)
    }
}
