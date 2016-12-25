import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  constructor(private musicService: MusicService) {
  }

  ngOnInit() {
    console.log('> init');
    this.musicService.getMusic();
  }
}
