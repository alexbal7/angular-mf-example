import { Injectable } from '@angular/core';

import { assetUrl } from './asset-url';

/**
 * single-spa utility service.
 */
@Injectable({
  providedIn: 'any',
})
export class SingleSpaService {
  /**
   * Get asset URL from it's project base path, not root-config's base path.
   *
   * @param url asset URL
   */
  // eslint-disable-next-line class-methods-use-this
  public assetUrl(url: string): string {
    // calling this line breaks Jest
    return assetUrl(url);
  }
}
