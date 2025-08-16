import { UserEntity } from "src/modules/user/entities/user.entity";

declare global {
  namespace Express {
    interface Request {
      user?: IUSER;
    }
  }
}
declare module "express-serve-static-core" {
    export interface Request {
        user?: UserEntity
    }
}
