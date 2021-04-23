// we import express to add types to the request/response objects from our controller functions
import express from "express";

// we import our newly created user services
import usersService from "../services/users.service";

// we use debug with a custom context as described in Part 1
import debug from "debug";

const log: debug.IDebugger = debug("app:users-controller");

class UsersController {
  async listUsers(req: express.Request, res: express.Response) {
    const users = await usersService.get();

    res.status(200).send(users);
  }

  async getUserById(req: express.Request, res: express.Response) {
    const user = await usersService.getUserById(parseInt(req.params.userId));

    res.status(200).send(user);
  }
}

export default new UsersController();
