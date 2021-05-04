import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  text = 'Start text';
  var = 0;

  onChangeText(){
    this.text = 'Changed text';
    this.var = 1;
  }



}
