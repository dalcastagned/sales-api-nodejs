/**
 * @openapi
 * components:
 *   schemas:
 *     IUser:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *         name:
 *          type: string
 *         email:
 *          type: string
 *         password:
 *          type: string
 *         created_at:
 *          type: string
 *         updated_at:
 *          type: string
 *         avatar_url:
 *          type: string
 */

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
  getAvatarUrl(): string | null;
}
