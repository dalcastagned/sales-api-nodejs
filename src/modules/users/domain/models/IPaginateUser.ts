/**
 * @openapi
 * components:
 *   schemas:
 *     IPaginateUser:
 *       type: object
 *       properties:
 *         per_page:
 *          type: number
 *         total:
 *           type: number
 *         current_page:
 *           type: number
 *         data:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/IUser'
 */

import { IUser } from './IUser';

export interface IPaginateUser {
  per_page: number;
  total: number;
  current_page: number;
  data: IUser[];
}
