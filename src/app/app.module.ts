import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoffeListComponent } from './components/coffe-list/coffe-list.component';
import { PointsComponent } from './components/points/points.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  { path: '', component: AppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CoffeListComponent,
    PointsComponent,
    SideMenuComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
