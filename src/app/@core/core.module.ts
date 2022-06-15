import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.modules';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SideNavigationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SideNavigationComponent,
  ]
})
export class CoreModule {}
