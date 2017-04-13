import {Injectable} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http){}

getLanguages(){
    return this.http.get('http://192.168.0.30:8888/languages/')
                .map((response: Response) => response.json());
}

tanslate(data){
     return this.http.get('http://192.168.0.30:8888/request?input='+data.input+'&language='+data.language)
                .map((response: Response) => response.json());

}
import(word){
    return this.http.post('http://192.168.0.30:8888/entries/', word,  {headers: this.headers})
                .map((response: Response) => response.json());

}
    
}