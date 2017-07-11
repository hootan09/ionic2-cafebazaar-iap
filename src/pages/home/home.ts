import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private iap: InAppPurchase) {

  }

  getInfo(){
    console.log('you click in getInfo purchase');
    this.iap.getProducts(['prod1']).then((products) => {
      console.log(products);
    })
     .catch((err) => {
   console.log(err);
 });
    
  }



//end of class
}
