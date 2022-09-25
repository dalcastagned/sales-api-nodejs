import { IUser } from './IUser';

/**
 * @openapi
 * components:
 *   schemas:
 *     IUserAuthenticated:
 *       type: object
 *       properties:
 *         user:
 *          $ref: '#/components/schemas/IUser'
 *         token:
 *           type: string
 */

export interface IUserAuthenticated {
  user: IUser;
  token: string;
}
