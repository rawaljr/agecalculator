import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myager = {
    year: null,
    age: null
  }
  constructor(public navCtrl: NavController) {

  }
  calAge(){
    if(this.myager.year != null){
      this.myager.age = 2021 - this.myager.year + 'Years Old'
    }
    if(this.myager.year === ''){
      this.myager.age = ''
    }
  }
}
