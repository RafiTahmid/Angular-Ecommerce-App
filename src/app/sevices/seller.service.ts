import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor() { }
  userSignUp(data: any) {
    return this.http.post()
  }
}
