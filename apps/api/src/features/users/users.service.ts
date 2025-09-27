import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOrCreateUser(firebaseUid: string) {
    let user = await this.prisma.user.findUnique({
      where: { firebaseUid },
    });

    if (!user) {
      // 新規ユーザー作成時にordinalを自動で採番
      user = await this.prisma.user.create({
        data: {
          firebaseUid,
          nickname: null, // 初期値はnull、後でユーザーが設定
        },
      });
    }

    return user;
  }

  async updateNickname(firebaseUid: string, nickname: string) {
    // ニックネームを小文字に変換（仕様に従って）
    const normalizedNickname = nickname.toLowerCase();

    return this.prisma.user.update({
      where: { firebaseUid },
      data: { nickname: normalizedNickname },
    });
  }

  async getUserByFirebaseUid(firebaseUid: string) {
    return this.prisma.user.findUnique({
      where: { firebaseUid },
    });
  }
}
