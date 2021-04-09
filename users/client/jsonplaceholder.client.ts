import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../types";
import { FetchAdapterInterface } from "../../common/interfaces/fetchadapter.interface";

@injectable()
class JsonPlaceHolderClient {
  private _fetchAdapter: FetchAdapterInterface
  private _BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(@inject(TYPES.FetchAdapterInterface) fetchAdapter: FetchAdapterInterface) {
    this._fetchAdapter = fetchAdapter;
  }

  get() {
    return this._fetchAdapter.get(`${this._BASE_URL}/users`);
  }

  getUserById(id: Number) {
    return this._fetchAdapter.get(`${this._BASE_URL}/users/${id}`);
  }
}

export { JsonPlaceHolderClient }