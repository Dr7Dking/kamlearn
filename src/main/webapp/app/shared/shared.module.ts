import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KamlearnSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [KamlearnSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [KamlearnSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KamlearnSharedModule {
  static forRoot() {
    return {
      ngModule: KamlearnSharedModule
    };
  }
}
