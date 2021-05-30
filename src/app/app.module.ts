import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoffeListComponent } from './components/coffe-list/coffe-list.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: AppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CoffeListComponent,
    SideMenuComponent,
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
