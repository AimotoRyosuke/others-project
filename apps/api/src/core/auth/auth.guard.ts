import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as admin from 'firebase-admin';

// Firebase Admin SDK初期化
if (!admin.apps.length) {
  const isEmulator =
    process.env.NODE_ENV === 'development' ||
    !!process.env.FIREBASE_AUTH_EMULATOR_HOST;

  if (isEmulator) {
    // Emulator環境での初期化
    admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID || 'demo-project',
    });

    // Emulator接続設定（環境変数 FIREBASE_AUTH_EMULATOR_HOST で自動設定）
  } else {
    // 本番環境での初期化
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('認証が必要です');
    }

    try {
      const token = authHeader.split(' ')[1];

      // エミュレーター環境での開発用トークン処理
      const isEmulator =
        process.env.NODE_ENV === 'development' ||
        !!process.env.FIREBASE_AUTH_EMULATOR_HOST;

      let decodedToken;
      if (isEmulator && token === 'dev-token') {
        // 開発用の固定トークン（エミュレーター専用）
        decodedToken = {
          uid: 'dev-user-1',
          email: 'dev@example.com',
        };
      } else {
        // 通常のFirebase ID Token検証
        decodedToken = await admin.auth().verifyIdToken(token);
      }

      req.user = {
        firebaseUid: decodedToken.uid,
        email: decodedToken.email || null,
      };
      return true;
    } catch (error) {
      console.error('Firebase Auth Error:', error);
      throw new UnauthorizedException('無効なトークンです');
    }
  }
}
