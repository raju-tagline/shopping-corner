import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserSignUp } from 'src/app/core/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public url: string = environment.firebaseConfig.databaseUrl;

  constructor(private http: HttpClient) {}

  public getUserLogin(): Observable<any> {
    return this.http.get(`${this.url}/admin.json`);
  }

  public getUserSignUp(userData: IUserSignUp): Observable<IUserSignUp> {
    return this.http.post<IUserSignUp>(`${this.url}/user.json`, userData);
  }

  public get(): Observable<any> {
    return this.http.get(`${this.url}/user.json`);
  }
}
