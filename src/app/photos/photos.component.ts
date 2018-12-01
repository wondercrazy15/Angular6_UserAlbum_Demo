import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router, RouterOutlet, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotosService } from '../Service/photos/photos.service';
import { Photos } from '../Model/Photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    PhotoList: Photos[];
    AlbumId: number;

    constructor(private activatedRoute: ActivatedRoute, private _albumService: PhotosService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.AlbumId = params['id'];
        });

        this.GetPhotosByAlbumId()

    }

    GetPhotosByAlbumId() {
        this._albumService.GetPhotosByAlbumId("https://jsonplaceholder.typicode.com/photos?albumId=" + this.AlbumId).subscribe(photos => {
            this.PhotoList = photos;
        })
    }
}
