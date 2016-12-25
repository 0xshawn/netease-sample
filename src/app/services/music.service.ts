import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MusicService {
  private URL: string = environment.neteaseMusicURL;

  constructor(private jsonp: Jsonp) {
  }

  search(name: string = null,
         callback: string = null,
         onlySong: boolean = true,
         limit: number = 3,
         offset: number = 0) {

    console.log('> Music Service: search');

    let searchUrl = `${this.URL}/api/search/suggest/web`;
    let data = {
      s: name,
      limit,
      type: 1,
      offset
    };

    return this.jsonp
      .get(searchUrl, data)
      .map(response => <string[]> response.json()[1]);
  }
}
