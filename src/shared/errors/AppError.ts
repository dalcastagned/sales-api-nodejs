/**
 * @openapi
 * components:
 *   schemas:
 *     AppError:
 *       type: object
 *       properties:
 *         status:
 *          type: string
 *         message:
 *          type: string
 */

class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
