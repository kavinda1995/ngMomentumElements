import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-momentum-elements',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() name = 'friend';
  focus: string;
  focusSet = false;

  setFocus(focus) {
    this.focus = focus;
    this.focusSet = true;
  }

  focusSetted() {
    alert('Your focus setup completed. Now lets work');
  }
}
