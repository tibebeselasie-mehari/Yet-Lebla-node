import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  showModal: boolean;

  @Input('actions')
  actions;

  constructor() { }

  ngOnInit() {
  }

  modalOk() {
    this.actions.modalOk();
    this.showModal = false;
  }

  modalCancel() {
    this.actions.modalCancel();
    this.showModal = false;
  }
}
