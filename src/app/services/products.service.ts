import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: any
  constructor(private _HttpClient: HttpClient) { 
    this.url = environment.apiUrl;
  }

  get_all_products() {
    return this._HttpClient.get(this.url + '/products');
  }

  get_products_categories() {
    return this._HttpClient.get(this.url + '/products/category-list');
  }

  add_product(data: any) {
    return this._HttpClient.post(this.url + '/products/add', data);
  }

  get_product(id: any) {
    return this._HttpClient.get(this.url + '/products/' + id);
  }

  update_product(id: any, data: any) {
    return this._HttpClient.put(this.url + '/products/' + id, data);
  }

  delete_product(id: any) {
    return this._HttpClient.delete(this.url + '/products/' + id);
  }
}
