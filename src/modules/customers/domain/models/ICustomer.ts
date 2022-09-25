/**
 * @openapi
 * components:
 *   schemas:
 *     ICustomer:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         created_at:
 *           type: string
 *         updated_at:
 *           type: string
 */

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}
