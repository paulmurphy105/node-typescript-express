import { JsonPlaceHolderClient } from "../client/jsonplaceholder.client";
import { DIContainer } from "../../inversify.config"
import { UserInt } from '../../common/interfaces/user.interface'
import User from '../models/user.model'

class UsersService {
  UserClient: JsonPlaceHolderClient = DIContainer.resolve<JsonPlaceHolderClient>(JsonPlaceHolderClient);

  async get() {
    const user = await this.UserClient.get();
    return user.map((usr: UserInt) => new User(usr));
  }

  async getUserById(id: number) {
    const user = await this.UserClient.getUserById(id);
    return new User(user);
  }
}

export default new UsersService();
