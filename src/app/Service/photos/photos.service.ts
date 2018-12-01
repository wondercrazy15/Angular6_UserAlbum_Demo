import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from '../../Model/Photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

    GetPhotosByAlbumId(url: string) {
    return this.http.get<Photos[]>(url)
  }
}
