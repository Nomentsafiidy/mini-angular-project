import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [AppComponent, OpenCloseComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
