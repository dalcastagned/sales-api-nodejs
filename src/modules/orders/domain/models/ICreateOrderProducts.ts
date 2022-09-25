/**
 * @openapi
 * components:
 *   schemas:
 *     ICreateOrderProducts:
 *       type: object
 *       required:
 *        - id
 *        - price
 *        - quantity
 *       properties:
 *         id:
 *          type: string
 *         price:
 *           type: number
 *         quantity:
 *           type: number
 */

export interface ICreateOrderProducts {
  id: string;
  price: number;
  quantity: number;
}
