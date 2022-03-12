import { Component, HostBinding, OnInit } from '@angular/core';
import { fade } from '@animations/fade';
import { ModalConfig } from '@interfaces/modal/modal-config.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;

  config: ModalConfig;

  constructor() {}

  ngOnInit() {}
}
