/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';

import { SingleSpaService } from './single-spa.service';

/**
 * Get asset URL from it's project base path, not root-config's base path.
 */
@Pipe({ name: 'assetUrl' })
export class AssetUrlPipe implements PipeTransform {
  constructor(
    private service: SingleSpaService,
  ) { }

  transform(value: string): string {
    return this.service.assetUrl(value);
  }
}
