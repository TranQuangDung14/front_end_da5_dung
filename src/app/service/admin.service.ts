import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { testapi } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private API_URL = 'http://127.0.0.1:8000/api/';

  private API_URL_de = 'http://127.0.0.1:8000/api/testdb/';
  
  public code_tokens = `Bearer ${localStorage.getItem('profanis_auth')}`;
  // private headers =
  // private API_URL_login = 'http://127.0.0.1:8000/api/login/';
constructor(private _httpClient: HttpClient) { 
}


login(data: any): Observable<any> {
  return this._httpClient.post<any>(this.API_URL+'login', data);
}

// getalltestapi():Observable<testapi[]>{
//   return this._httpClient.get<testapi[]>(this.API_URL+'testdb/');
//  }


// Test api 
getalltestapi(): Observable<testapi[]> {
  return this._httpClient.get<testapi[]>(this.API_URL+'testdb/', {
    headers: {
      Authorization: this.code_tokens
    }
  });
}
create(data: any): Observable<any> {
  return this._httpClient.post<any>(this.API_URL+'testdb/', data,{
    headers: {
      Authorization: this.code_tokens
    }
  });
}
  //show dữ liệu theo id
  getedit(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL+'testdb/' + id,{
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  update(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL+'testdb/' + id, data,{
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
delete(id: number): Observable<any> {
  return this._httpClient.delete<any>(this.API_URL+'testdb/' + id
    ,
    {
    headers: {
      Authorization: this.code_tokens
    }
  }
  );


}


}
