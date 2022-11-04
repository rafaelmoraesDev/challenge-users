import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API = 'api/users';

  constructor(private httpClient: HttpClient) { }

  async list() {
    const  response  = await axios.get('http://localhost:8080/api/users');
    return response.data;

  }
}
