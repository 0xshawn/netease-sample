import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import { Observable } from "rxjs";
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  music: Observable<string[]>;

  constructor(private musicService: MusicService) {
  }

  ngOnInit() {
    console.log('> init');
    this.music = this.musicService.search();

    this.music.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }
}
