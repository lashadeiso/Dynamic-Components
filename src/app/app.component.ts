import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ViewContainerDirective } from './directives/view-container.directive';
import { InformationBannerComponent } from './modals/information-banner/information-banner.component';
import { SetInformationComponent } from './modals/set-information/set-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  @ViewChild(ViewContainerDirective) modalHost!: ViewContainerDirective;

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  initModal(modalType: any, submitHandler: Function = () => {}) {
    const modalFactory =
      this.factoryResolver.resolveComponentFactory(modalType);

    const viewContainer = this.modalHost.viewContainerRef;

    viewContainer.clear();

    let modalRef: any = viewContainer.createComponent(modalFactory);
    modalRef.instance.closeEmitter.subscribe(() => {
      viewContainer.clear();
    });
    modalRef.instance.saveEmitter.subscribe((res: any) => {
      submitHandler(res);
    });
  }

  showInformationBanner() {
    this.initModal(InformationBannerComponent);
  }

  showSetInformationModal() {
    this.initModal(SetInformationComponent, (res: any) => {
      console.log(res);
    });
  }
}
