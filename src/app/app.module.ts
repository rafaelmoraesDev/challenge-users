import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UsersService } from './services/users.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultTableComponent,
    UsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
