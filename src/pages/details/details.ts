import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// import { CustomizePlanPage } from '../customize-plan/customize-plan';


@IonicPage()
@Component({
  selector: 'page-icodetails',
  templateUrl: 'details.html',
})
export class DetailsPage {
  itemDetails$: FirebaseObjectObservable<any>;

  item:any;
  
  public icoDetails$: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
            public firebaseProvider: FirebaseProvider,public modalCtrl: ModalController) {
    // this.item = this.navParams.get('item');
    let id = this.navParams.get('id');
    let isBreakfast = this.navParams.get('isBreakfast');
  
    // this.itemDetails$ = this.firebaseProvider.getItemDetails(this.item.id);
    this.itemDetails$ = this.firebaseProvider.getItemDetails(id,isBreakfast);

    console.log("Ico Details ===> ", this.itemDetails$);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcodetailsPage');
  }

  // openModal(icodetails) {
    
  //       console.log("Ico details ==> ", icodetails);
        // let modal = this.modalCtrl.create(CustomizePlanPage, { icotitle: icodetails.title,
  //              presaleMin: icodetails.presaleMinimum, 
  //              presaleBonus: icodetails.presaleBonu,
  //             presalePrice: icodetails.presalePrice,
  //           status:icodetails.status,
  //         id:icodetails.$key});
  //       modal.present();
  //     }

      closeModal() {
        this.viewCtrl.dismiss();
      }

}
