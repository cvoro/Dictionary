import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data = {};
  word = {};
explanation;
  languages;
 // languages = [{string: "jedan"}]
//  languages = [{ "name":"John", "age":31, "city":"New York" }, { "name":"Marko", "age":31, "city":"New York" }];

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
      err => console.log(err),
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
}
