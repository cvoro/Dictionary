import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data = {}; //object to be translated
  word = {};// object to be imported
explanation;
  languages;
  langImport = {};
  error;
  power;
  uWord = {}; //object to be updated


constructor(private appService: AppService){}

ngOnInit(){
  return this.appService.getLanguages().subscribe(
    languages => {console.log(languages)
     this.languages = languages},
    err => console.log(err),
    () => console.log("complete")
  )
}
  translate(data){
    console.log(data)
    return this.appService.tanslate(data).subscribe(
      exp => {this.explanation = exp
        console.log(this.explanation)
      },
      err => {console.log(err)
      this.error = err},
      () => console.log("complete")
    )
  }

  import(word){
    console.log(word)
    return this.appService.import(word).subscribe(
          data => console.log(data),
      err => console.log(err),
      () => console.log("complete")
    )
  }
   update(explanation){
    console.log(explanation)
    return this.appService.update(explanation).subscribe(
          data => console.log(data),
      err => console.log(err),
      () => console.log("complete")
    )
  }
    delete(explanation, i){
    console.log(explanation)
    return this.appService.delete(explanation).subscribe(
          data => {console.log(data)
          this.explanation.splice(i,1)},
      err => console.log(err),
      () => console.log("complete")
    )
  }
    importLang(langImport){
    console.log(langImport)
    return this.appService.importLang(langImport).subscribe(
          data =>{ console.log(data)
          this.getAll()},
      err => console.log(err),
      () => console.log("complete")
    )
  }
  getAll(){
  return this.appService.getLanguages().subscribe(
    languages => {console.log(languages)
     this.languages = languages},
    err => console.log(err),
    () => console.log("complete")
  )
}
  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('access_token');
    }
         public authenticated() {
         //chech if token is in localStorage
         let token = localStorage.getItem('access_token');
         if(token)
    return true;
    else
    return false;
  }

    deleteLang(id, i){
    console.log(id)
    return this.appService.deleteLang(id).subscribe(
          data =>{ console.log(data)
          this.languages.splice(i,1)},
      err => console.log(err),
      () => console.log("complete")
    )
  }
}
