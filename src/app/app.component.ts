import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Ionic 6 Angular ' + VERSION.major;

  spinnerActive = false;
  actionStarted = false;
  actionCompleted = false;

  ngOnInit() {
    // present the action
    this.actionStarted = true;
    setTimeout( () => {
      this.startAction();
    }, 400); 
  }

  ionViewDidEnter() {
    console.log('CRAP')
  }

  startAction() {
    this.spinnerActive = true;
    setTimeout( () => {
      this.updater();
    }, 1500);
  }

  updater() {
    setTimeout( () => {
      this.spinnerActive = false;
      this.actionStarted = false; 
      this.actionCompleted = true;
    }, 2000);
  }
}
