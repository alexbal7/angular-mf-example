import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetUrlPipe } from './asset-url-pipe';
import { SingleSpaService } from './single-spa.service';

/**
 * single-spa utility module.
 */
@NgModule({
  declarations: [
    AssetUrlPipe,
  ],
  exports: [
    AssetUrlPipe,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    SingleSpaService,
  ],
})
export class SingleSpaModule { }
