import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums } from '../../Model/Albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  GetAlbumList(url: string) {
    return this.http.get<Albums[]>(url)
  }

}
