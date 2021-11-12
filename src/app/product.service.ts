import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = '../assets/album.json';

  getAlbum(number : id) {
    return this._http.get(this._albumUrl)
      .map(Response => response.json());
  }
}
