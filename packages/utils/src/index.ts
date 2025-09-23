import type { EmotionCode } from '@others/types';

// 日付フォーマット関数
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return '今';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}分前`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}時間前`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}日前`;

  return date.toLocaleDateString('ja-JP');
}

// 感情コードの日本語変換
export const emotionLabels: Record<EmotionCode, string> = {
  happy: '嬉しい',
  sad: '悲しい',
  lonely: '寂しい',
  fun: '楽しい',
  angry: '怒り',
  scary: '怖い',
  amazing: 'すごい',
};

export function getEmotionLabel(code: EmotionCode): string {
  return emotionLabels[code];
}

// テキストの切り詰め
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// 匿名ユーザー名生成
export function generateAnonymousName(ordinal: number): string {
  return `anonymous${ordinal}`;
}

// Apollo Client エラーハンドリング
export function extractErrorMessage(error: unknown): string {
  if (error && typeof error === 'object' && 'graphQLErrors' in error) {
    const gqlError = error as { graphQLErrors?: Array<{ message: string }> };
    if (gqlError.graphQLErrors && gqlError.graphQLErrors.length > 0) {
      return gqlError.graphQLErrors[0].message;
    }
  }
  if (error && typeof error === 'object' && 'networkError' in error) {
    const netError = error as { networkError?: { message: string } };
    if (netError.networkError?.message) {
      return netError.networkError.message;
    }
  }
  if (error && typeof error === 'object' && 'message' in error) {
    const msgError = error as { message: string };
    return msgError.message;
  }
  return '不明なエラーが発生しました';
}
