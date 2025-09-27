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
