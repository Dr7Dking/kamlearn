import { NgModule } from '@angular/core';

import { KamlearnSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [KamlearnSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [KamlearnSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KamlearnSharedCommonModule {}
