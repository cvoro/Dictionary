import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = {};
  word = {};


  translate(data){
    console.log(data)
    // return this.appService.translate(data).subscribe(
    //   data => console.log(data),
    //   err => console.log(err),
    //   complete => console.log(complete)
    // )
  }

  import(word){
    console.log(word)
  }
}
