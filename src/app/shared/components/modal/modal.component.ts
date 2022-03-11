import { Component, OnInit } from '@angular/core';
import { ModalConfig } from '@interfaces/modal/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  config: ModalConfig;

  constructor() {}

  ngOnInit() {}
}
