/**
 * @openapi
 * components:
 *   schemas:
 *     ICreateProduct:
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

export interface ICreateProduct {
  name: string;
  price: number;
  quantity: number;
}
