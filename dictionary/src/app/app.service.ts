import {Injectable} from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
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
    return this.http.post('http://192.168.0.30:8888/entries/', word, this.jwt())
                .map((response: Response) => response.json());
}
update(uWord){
    return this.http.put('http://192.168.0.30:8888/entries/'+uWord.id, uWord,  this.jwt())
                .map((response: Response) => response.json());
}
delete(uWord){
    return this.http.delete('http://192.168.0.30:8888/entries/'+uWord.id, this.jwt())
                .map((response: Response) => response.json());
}
   importLang(langImport){
    return this.http.post('http://192.168.0.30:8888/languages/', langImport, this.jwt())
                .map((response: Response) => response.json());
}
   deleteLang(id){
    return this.http.delete('http://192.168.0.30:8888/languages/'+id, this.jwt())
                .map((response: Response) => response.json());
}
 private jwt(){
        let access_token = localStorage.getItem('access_token');
        if(access_token){
            let headers = new Headers({'Authorization': 'Bearer ' +  access_token});
            return new RequestOptions({headers: headers});
        }
    }   
}