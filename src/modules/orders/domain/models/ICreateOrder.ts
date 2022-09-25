/**
 * @openapi
 * components:
 *   schemas:
 *     ICreateOrder:
 *       type: object
 *       required:
 *        - customer_id
 *        - products
 *       properties:
 *         customer_id:
 *          type: string
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ICreateOrderProducts'
 */

import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICreateOrderProducts } from './ICreateOrderProducts';

export interface ICreateOrder {
  customer: ICustomer;
  products: ICreateOrderProducts[];
}
