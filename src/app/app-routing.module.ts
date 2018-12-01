import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'user/albums/:id',
    component: AlbumsComponent
  },
  {
    path: 'user/albums/photos/:id',
    component: PhotosComponent
  },
  {
      path: 'posts',
      component: PostsComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
