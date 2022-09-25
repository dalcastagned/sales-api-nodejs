/**
 * @openapi
 * components:
 *   schemas:
 *     ICreateUser:
 *       type: object
 *       required:
 *        - name
 *        - email
 *        - password
 *       properties:
 *         name:
 *          type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
