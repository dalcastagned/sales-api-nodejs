/**
 * @openapi
 * components:
 *   schemas:
 *     ISendForgotPasswordEmail:
 *       type: object
 *       required:
 *        - email
 *       properties:
 *         email:
 *          type: string
 */

export interface ISendForgotPasswordEmail {
  email: string;
}
