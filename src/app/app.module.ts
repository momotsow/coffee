import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoffeListComponent } from './components/coffe-list/coffe-list.component';
import { PointsComponent } from './components/points/points.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

const routes: Routes = [
  { path: '', component: AppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CoffeListComponent,
    PointsComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
