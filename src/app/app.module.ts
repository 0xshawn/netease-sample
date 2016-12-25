import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { MusicService } from './services/music.service';
// import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
