import {Injectable} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{

private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http){}

      Login(data){
    return this.http.post('http://192.168.0.30:8888/o/token/',data, {headers: this.headers})
                .map((token: Response) => {localStorage.setItem('access_token', token.json().access_token)}) 
}

}