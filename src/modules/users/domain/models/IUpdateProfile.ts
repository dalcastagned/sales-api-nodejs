/**
 * @openapi
 * components:
 *   schemas:
 *     IUpdateProfile:
 *       type: object
 *       required:
 *        - name
 *        - email
 *       properties:
 *         name:
 *          type: string
 *         email:
 *          type: string
 *         password:
 *          type: string
 *         old_password:
 *          type: string
 */

export interface IUpdateProfile {
  user_id: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}
