import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private post = new BehaviorSubject<Array<any>>([]);
  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.postsUrl}/${id}`).pipe(
      tap((data) => {
        this.post.next([...this.post.getValue(), data]);
      })
    );
  }
}
