/**
 * @openapi
 * components:
 *   schemas:
 *     ICreateCustomer:
 *       type: object
 *       required:
 *        - name
 *        - email
 *       properties:
 *         name:
 *          type: string
 *         email:
 *           type: string
 */

export interface ICreateCustomer {
  name: string;
  email: string;
}
