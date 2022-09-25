/**
 * @openapi
 * components:
 *   schemas:
 *     IUpdateCustomer:
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

export interface IUpdateCustomer {
  id: string;
  name: string;
  email: string;
}
