import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  HomePage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public touchId: TouchID) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewDidEnter() {
        this.verify();
    }

    verify(){

        this.touchId.verifyFingerprint('Scan your fingerprint to unlock').then((res) => {
            this.navCtrl.push(HomePage);
            this.viewCtrl.dismiss();

        }, (err) => {
            console.log(err);
            this.verify();
        });

    }

}
