import { injectable } from 'inversify';
import fetch from 'node-fetch';

import { FetchAdapterInterface } from '../interfaces/fetchadapter.interface'

@injectable()
class FetchAdapter implements FetchAdapterInterface {
  async get(url: string) {
    return this._fetchGet(url)
  }

  private async _fetchGet(url: string) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data);
  }
}

export { FetchAdapter }