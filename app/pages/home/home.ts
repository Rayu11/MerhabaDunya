import {Page} from 'ionic-angular';
import {DigersayfaPage} from '../digersayfa/digersayfa';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  digersayfaPage = DigersayfaPage;

  constructor(){

  }
}