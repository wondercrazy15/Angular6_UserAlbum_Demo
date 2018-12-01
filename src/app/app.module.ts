import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatToolbarModule,
         MatButtonModule, MatSidenavModule, MatIconModule, MatIconRegistry, MatListModule, MatRadioModule, MatCheckboxModule,
         MatDividerModule, MatMenuModule, MatTableDataSource, MatFormFieldModule, MatGridListModule, MatCardModule, } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  exports: [
    MatInputModule,
    CdkTableModule,
    CdkTreeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule
  ],
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})

export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/mdi.svg'));
  }


}
