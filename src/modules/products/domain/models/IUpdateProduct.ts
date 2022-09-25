/**
 * @openapi
 * components:
 *   schemas:
 *     IUpdateProduct:
 *       type: object
 *       required:
 *        - name
 *        - price
 *        - quantity
 *       properties:
 *         name:
 *          type: string
 *         price:
 *           type: number
 *         quantity:
 *           type: number
 */

export interface IUpdateProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
