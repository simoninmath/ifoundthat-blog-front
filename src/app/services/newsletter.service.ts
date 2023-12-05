import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private apiUrl = 'https://localhost:8000/api/newsletters?page=1'; // Api Plateform URL

  constructor(private http: HttpClient) { }

  getSubscribers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/subscribers`);
  }
}