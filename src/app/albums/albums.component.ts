import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { AlbumsService } from '../Service/Albums/Albums.service';
import { Albums } from '../Model/Albums';
import { Router, RouterOutlet, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  AlbumList: Albums[];   
  UserID: number;

  constructor(private activatedRoute: ActivatedRoute, private _albumService: AlbumsService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.UserID = params['id'];
    });

    this.GetAlbumList()

  }

  GetAlbumList() {
    this._albumService.GetAlbumList("https://jsonplaceholder.typicode.com/albums?userId=" + this.UserID).subscribe(album => {
      this.AlbumList = album;
    })
  }

}
