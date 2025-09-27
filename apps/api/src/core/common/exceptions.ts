import { HttpStatus } from '@nestjs/common';
import { GraphQLError } from 'graphql';

export class NotFoundError extends GraphQLError {
  constructor(resource: string, id: string) {
    super(`${resource} with ID ${id} not found`, {
      extensions: {
        code: 'NOT_FOUND',
        http: { status: HttpStatus.NOT_FOUND },
      },
    });
  }
}

export class ValidationError extends GraphQLError {
  constructor(message: string) {
    super(`バリデーションエラー: ${message}`, {
      extensions: {
        code: 'VALIDATION_ERROR',
        http: { status: HttpStatus.BAD_REQUEST },
      },
    });
  }
}

export class UnauthorizedError extends GraphQLError {
  constructor(message = '認証が必要です') {
    super(message, {
      extensions: {
        code: 'UNAUTHORIZED',
        http: { status: HttpStatus.UNAUTHORIZED },
      },
    });
  }
}

export class ForbiddenError extends GraphQLError {
  constructor(message = 'アクセス権限がありません') {
    super(message, {
      extensions: {
        code: 'FORBIDDEN',
        http: { status: HttpStatus.FORBIDDEN },
      },
    });
  }
}
