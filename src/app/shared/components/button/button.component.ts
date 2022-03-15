import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  id: string;
  @Input()
  type: string = 'button';
  @Input()
  ariaDisabled?: boolean = false;
  @Input()
  label: string;

  constructor() {}

  ngOnInit() {}
}
