/**
 * @openapi
 * components:
 *   schemas:
 *     ICustomerPaginate:
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
 *            $ref: '#/components/schemas/ICustomer'
 */

import { ICustomer } from './ICustomer';

export interface ICustomerPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: ICustomer[];
}
