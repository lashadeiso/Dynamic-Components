import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-information',
  templateUrl: './set-information.component.html',
  styleUrls: ['./set-information.component.css'],
})
export class SetInformationComponent {
  closeEmitter = new EventEmitter<void>();

  saveEmitter = new EventEmitter<any>();

  closeModal() {
    this.closeEmitter.emit();
  }

  onFormSubmit(form: NgForm) {
    this.saveEmitter.emit(form.value);
  }
}
