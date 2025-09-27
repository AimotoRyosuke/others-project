const urlLike = /(https?:\/\/|www\.)\S+/i;
const emailLike = /\b\S+@\S+\.[\w.-]+\b/;
const phoneLike =
  /\b(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}\b/;
export function assertPolicy(text?: string) {
  if (!text) return;
  const t = text.toLowerCase();
  if (urlLike.test(t)) throw new Error('URLは禁止です');
  if (emailLike.test(t)) throw new Error('メールは禁止です');
  if (phoneLike.test(t)) throw new Error('電話番号は禁止です');
}
