//To-do
//mettre register comme root-page
//Find the font
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import randomstring from 'randomstring';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Variable utilisée pour le code QR. Voir le contenu dee ngx-qrcode dans le fichier HTML.
  createdCode = "blablablacode";
  /*Note: Pour plus de securite deux options sont possible:
    - utiliser un random-string pour le code qr mais pour eviter une eventuelle duplication
    - utiliser des informations de l'utilisateur(id, nom+prenom+numero) */

  constructor(public navCtrl: NavController) {
    // randomstringPromise(16, 'numeric') // length=16, charset='numeric'
    //   .then(function (result) {
    //     this.createdCode = result;
    //   });
  }
}
