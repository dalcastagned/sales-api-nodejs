/**
 * @openapi
 * components:
 *   schemas:
 *     IProduct:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         quantity:
 *           type: number
 *         created_at:
 *           type: string
 *         updated_at:
 *           type: string
 */

import { IOrderProducts } from '@modules/orders/domain/models/IOrderProducts';

export interface IProduct {
  id: string;
  order_products?: IOrderProducts[];
  name: string;
  price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}
