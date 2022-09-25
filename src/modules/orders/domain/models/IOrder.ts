/**
 * @openapi
 * components:
 *   schemas:
 *     IOrder:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         order:
 *           type: number
 *         customer:
 *           $ref: '#/components/schemas/ICustomer'
 *         order_products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ICreateOrderProducts'
 *         created_at:
 *          type: string
 *         updated_at:
 *          type: string
 */

import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICreateOrderProducts } from './ICreateOrderProducts';

export interface IOrder {
  id: string;
  order: number;
  customer: ICustomer;
  order_products: ICreateOrderProducts[];
  created_at: Date;
  updated_at: Date;
}
