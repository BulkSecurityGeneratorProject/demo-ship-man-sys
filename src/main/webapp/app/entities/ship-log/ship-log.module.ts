import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ShipManagementSystemSharedModule } from 'app/shared';
import {
  ShipLogComponent,
  ShipLogDetailComponent,
  ShipLogUpdateComponent,
  ShipLogDeletePopupComponent,
  ShipLogDeleteDialogComponent,
  shipLogRoute,
  shipLogPopupRoute
} from './';

const ENTITY_STATES = [...shipLogRoute, ...shipLogPopupRoute];

@NgModule({
  imports: [ShipManagementSystemSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ShipLogComponent,
    ShipLogDetailComponent,
    ShipLogUpdateComponent,
    ShipLogDeleteDialogComponent,
    ShipLogDeletePopupComponent
  ],
  entryComponents: [ShipLogComponent, ShipLogUpdateComponent, ShipLogDeleteDialogComponent, ShipLogDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipManagementSystemShipLogModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
