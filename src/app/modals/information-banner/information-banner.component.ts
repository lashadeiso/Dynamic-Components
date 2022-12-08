import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information-banner',
  templateUrl: './information-banner.component.html',
  styleUrls: ['./information-banner.component.css'],
})
export class InformationBannerComponent {
  closeEmitter = new EventEmitter<void>();
  closeModal() {
    this.closeEmitter.emit();
  }
}
