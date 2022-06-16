import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ionic 6 Angular ' + VERSION.major;

  ionViewDidEnter() {
    console.log('CRAP')
  }
}
