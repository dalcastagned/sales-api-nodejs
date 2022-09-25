/**
 * @openapi
 * components:
 *   schemas:
 *     IProductPaginate:
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
 *            $ref: '#/components/schemas/IProduct'
 */

import { IProduct } from './IProduct';

export interface IProductPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: IProduct[];
}
