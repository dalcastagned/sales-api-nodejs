/**
 * @openapi
 * components:
 *   schemas:
 *     IResetPassword:
 *       type: object
 *       required:
 *        - token
 *        - password
 *       properties:
 *         token:
 *          type: string
 *         password:
 *          type: string
 */

export interface IResetPassword {
  token: string;
  password: string;
}
