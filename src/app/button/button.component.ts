import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input() btnText = 'Button';
  @Output() btnClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickBtn(event) {
    console.log('btn clicked');
    this.btnClicked.emit(event);
  }

}
