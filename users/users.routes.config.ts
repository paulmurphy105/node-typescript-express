import { CommonRoutesConfig } from "../common/common.routes.config";
import UsersController from "./controllers/users.controller";
import UsersMiddleware from "./middleware/users.middleware";
import express from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/users`)
      .get(UsersController.listUsers)
    this.app.param(`userId`, UsersMiddleware.extractUserId);
    this.app
      .route(`/users/:userId`)
      .all(UsersMiddleware.validateUserExists)
      .get(UsersController.getUserById)

    return this.app;
  }
}
