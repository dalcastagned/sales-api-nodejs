/**
 * @openapi
 * components:
 *   schemas:
 *     ICreateSession:
 *       type: object
 *       required:
 *        - email
 *        - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

export interface ICreateSession {
  email: string;
  password: string;
}
