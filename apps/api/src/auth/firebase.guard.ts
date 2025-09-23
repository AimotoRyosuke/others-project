import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    const auth = req.headers['authorization'] as string | undefined;
    if (!auth?.startsWith('Bearer ')) return false;
    const token = auth.slice('Bearer '.length);
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = { firebaseUid: decoded.uid };
    return true;
  }
}
