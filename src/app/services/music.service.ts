import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class MusicService {

  private url: string = 'http://www.baidu.com';

  constructor(private jsonp: Jsonp) {
  }

  search() {
    console.log('> Music Service: search');

    let url = 'http://baidu.com';
    let params = new URLSearchParams();
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(url)
      .map(response => <string[]> response.json()[1]);
  }
}
