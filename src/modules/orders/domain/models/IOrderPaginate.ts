/**
 * @openapi
 * components:
 *   schemas:
 *     IOrderPaginate:
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
 *            $ref: '#/components/schemas/IOrder'
 */

import { IOrder } from './IOrder';

export interface IOrderPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: IOrder[];
}
