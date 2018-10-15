import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public id:number=0;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController,private localNotifications: LocalNotifications) {
  }
  ionViewWillEnter() {
          this.viewCtrl.showBackButton(false);
      }


  schedule(){
    this.id += 1;
    this.localNotifications.schedule({
      id: this.id,
      text: 'Notification from nativeapp',
      title: 'The id of this notification is'+String(this.id),
      badge:2,
      trigger: {at: new Date(new Date().getTime() + 2000)}
      });
  }
}
