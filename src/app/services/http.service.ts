import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  updateData(obj: any) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/todos/${obj.id}`,
      obj
    );
  }
}
