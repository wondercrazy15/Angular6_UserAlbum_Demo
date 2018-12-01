import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router, RouterOutlet, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../Service/posts/posts.service';
import { UsersService } from '../Service/users/users.service';
import { CommentsService } from '../Service/comments/comments.service';
import { Posts } from '../Model/posts';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    PostList: Posts[];

    constructor(private _postsService: PostsService, private _userService: UsersService, private _commentsService: CommentsService) {
    }

    ngOnInit() {
        this.GetPosts();
    }
   
    GetPosts() {
        this._postsService.GetPostList("https://jsonplaceholder.typicode.com/posts").subscribe(posts => {
            this.PostList = posts;
            for (let post of this.PostList) {

                this._commentsService.GetCommentsbyPostID("https://jsonplaceholder.typicode.com/comments?postId=" + post.id).subscribe(comment => {
                    post.comments = comment;

                    this._userService.GetUserbyID("https://jsonplaceholder.typicode.com/users/" + post.userId).subscribe(user => {
                        post.username = user.username;
                        post.name = user.name;

                    })

                })
            }
        });       
    }
}

